import { useEffect, useRef, useState } from "react"
import matter from "gray-matter"
import { getDownloadURL, ref, uploadBytesResumable } from "@firebase/storage"
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator")

import Layout from "../components/Layout"
import Editor from "../components/editor"
import Preview from "../components/preview"
import { fireStorage } from "../utils/fire-client"
import { HOSTNAME } from "../config"

const LiveEditor = ({ uid }) => {
  const [mdxCode, setMdxCode] = useState("# THIS IS MDX")
  const [mdx, setMDX] = useState()
  const [message, setMessage] = useState("")
  const [mType, setMType] = useState("")
  const [currentImgUrl, setCurrentImgUrl] = useState("")
  const [pageLink, setPageLink] = useState("")
  const [pubLoad, setPubLoad] = useState(false)
  const [upLoad, setUpLoad] = useState(false)
  const uploadBtnRef = useRef()

  useEffect(async () => {
    const { content, data } = matter(mdxCode)

    const response = await fetch("/api/render-string", {
      method: "POST",
      body: JSON.stringify({
        content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      const result = await response.json()
      setMDX(result.result)
    }
  }, [mdxCode])

  function submitPage() {
    setPubLoad(true)

    if (uid) {
      const randomName = uniqueNamesGenerator({
        dictionaries: [adjectives, colors, animals],
      }).replace(/_/g, "-")

      fetch("/api/publish", {
        method: "POST",
        body: JSON.stringify({
          content: mdxCode,
          uid,
          timeCreated: new Date().getTime(),
          name: randomName,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((data) => data.json())
        .then((data) => {
          if (data.ok) {
            setPubLoad(false)
            showMessage(
              data.message,
              "green",
              `http://${randomName}.${HOSTNAME}`
            )
          }
        })
    }
  }

  function handleImageUpload(e) {
    setUpLoad(true)
    const image = e.target.files[0]

    const imageRef = ref(fireStorage, `images/${image.name}`)
    const uploadTask = uploadBytesResumable(imageRef, image)

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log("Upload is " + progress + "% done")
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused")
            break
          case "running":
            console.log("Upload is running")
            break
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setCurrentImgUrl(downloadURL)
          console.log("File available at", downloadURL)
          setUpLoad(false)
        })
      }
    )
  }

  function copyTextToClipboard(e) {
    e.target.innerHTML = "Copied..."
    setTimeout(() => {
      e.target.innerHTML = "Copy Image URL"
    }, 2000)
    var textArea = document.createElement("textarea")
    textArea.value = currentImgUrl

    textArea.style.top = "0"
    textArea.style.left = "0"
    textArea.style.position = "fixed"

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    try {
      var successful = document.execCommand("copy")
      var msg = successful ? "successful" : "unsuccessful"
      console.log("Fallback: Copying text command was " + msg)
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err)
    }

    document.body.removeChild(textArea)
  }

  function showMessage(message, type, link = "") {
    setMessage(message)
    setMType(type)
    setPageLink(link)

    setTimeout(() => setMessage(""), 10000)
  }

  return (
    <Layout isUser={!!uid}>
      <div className="flex w-full h-3/4 gap-4 mt-4">
        <Editor mdxCode={mdxCode} setMdxCode={setMdxCode} />
        <Preview mdxPreview={mdx} />
      </div>

      {message && (
        <div className={`text-${mType}-400 px-2 py-4`}>
          {message}
          <br />
          {pageLink && (
            <a href={pageLink} rel="noopener noreferrer" target="_blank">
              Click Here To Open It.
            </a>
          )}
        </div>
      )}

      {uid && (
        <>
          <div>
            <button
              className={"my-2 btn btn-info " + (pubLoad ? "loading" : "")}
              onClick={submitPage}
            >
              PUBLISH
            </button>

            <button
              className={"my-2 btn btn-info ml-2 " + (upLoad ? "loading" : "")}
              onClick={() => {
                uploadBtnRef.current.click()
              }}
            >
              UPLOAD IMAGE
            </button>

            <input
              className="my-2 btn btn-info ml-2"
              type="file"
              style={{ display: "none" }}
              ref={uploadBtnRef}
              onChange={handleImageUpload}
            />
          </div>
          <div>
            {currentImgUrl && (
              <div
                className="border border-gray-900 rounded text-gray-100 overflow-hidden bg-gray-900 py-2 px-4 cursor-pointer w-max"
                children={"Copy Image URL"}
                onClick={copyTextToClipboard}
              />
            )}
          </div>
        </>
      )}
    </Layout>
  )
}

export default LiveEditor

export async function getServerSideProps({ req, res }) {
  const { uid } = req.cookies

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
