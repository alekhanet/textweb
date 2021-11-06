import { useState, useEffect } from "react"
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore"
import matter from "gray-matter"
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

import { auth, db, fireDB } from "../../utils/fire-client"
import { HOSTNAME } from "../../config"
import Layout from "../components/Layout"
import MDXComponents from "../components/mdx"
import Loader from "../components/loader"
import Dashboard from "../components/dashboard"
import Fluid from '../components/Fluid'

export default function Index({ uid, isPage = false, mdxSource }) {
  const [loader, setLoader] = useState(true)
  const [isUser, setIsUser] = useState(false)

  useEffect(() => {
    if (uid) {
      setIsUser(true)
    }

    setLoader(false)
  }, [])

  if (isPage) {
    return (
      <main className="bg-white w-screen h-screen m-0 overflow-hidden overflow-y-scroll py-4 px-8 text-black">
        <a href={`http://${HOSTNAME}`} className="btn btn-sm btn-info">
          GO BACK TEXTWEB
        </a>
        {mdxSource && hydrate(mdxSource, { components: MDXComponents })}
      </main>
    )
  }

  return (
    <Layout isUser={!!uid}>
      {loader ? (
        <Loader />
      ) : isUser ? (
        <Dashboard uid={uid} />
      ) : (
        <div className="hero w-full h-full flex flex-col justify-center items-center">
          <h1 className="w-full text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 text-center my-6">
            Beautiful Landing Pages <br /> with MDX in <br /> Just 10 Seconds!
          </h1>

          <a
            className="btn btn-info my-6 bg-gradient-to-r from-yellow-500 to-red-500"
            href={`http://demo-page.${HOSTNAME}`}
          >
            See Demo Page
          </a>
        </div>
      )}
      <div id="fluid-background" className="fixed left-0 top-0 h-full w-full z-10">
        <Fluid />
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
  const { uid } = req.cookies
  const host = req.headers.host.split(".")

  if (host[0] !== HOSTNAME.split(".")[0] && host[0] !== "www") {
    const pagesCollection = collection(fireDB, "pages")
    const pageQ = query(pagesCollection, where("name", "==", host[0]))
    const docSnap = await getDocs(pageQ)
    const docs = []
    docSnap.forEach((doc) => docs.push(doc.data()))

    if (docs[0]) {
      const { content, data } = matter(docs[0].content)
      const mdxSource = await renderToString(content, {
        components: MDXComponents,
      })

      if (mdxSource) {
        return {
          props: {
            isPage: true,
            mdxSource,
          },
        }
      }
    } else {
      return {
        props: {
          redirect: {
            destination: "/",
          },
        },
      }
    }
  }

  if (uid) {
    return {
      props: {
        uid,
      },
    }
  }

  return {
    props: {},
  }
}
