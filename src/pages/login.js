import { useState } from "react"
import { useRouter } from "next/router"

import Layout from "../components/Layout"

const LogIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const router = useRouter()

  function signIn(e) {
    e.preventDefault()
    setLoading(true)

    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.user) {
          router.push("/")
        }
      })
      .catch((e) => {
        setLoading(false)
        showMessage(e)
      })
  }

  function showMessage(message) {
    setMessage(message)
    setTimeout(() => {
      setMessage("")
    }, 5000)
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <div className="p-10 card bg-base-200 w-3/6 my-10">
          <h1 className="mb-4 text-2xl">Log In</h1>
          <form action="/api/login" onSubmit={signIn}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className={"btn btn-primary my-4 " + (loading ? "loading" : "")}
              >
                LogIn
              </button>

              <div className="text-red-500 my-2">{message}</div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default LogIn

export async function getServerSideProps({ req, res }) {
  const { uid } = req.cookies

  if (uid) {
    return {
      redirect: {
        destination: "/",
      },
    }
  }

  return {
    props: {},
  }
}
