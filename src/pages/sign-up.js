import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/router"

import { auth } from "../../utils/fire-client"
import Layout from "../components/Layout"
import { useState } from "react"

const SignUp = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function createUser(e) {
    e.preventDefault()

    if (password === passwordConfirm && email !== "") {
      setLoading(true)

      fetch("/api/sign-up", {
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
          showMessage(e.data.message)
          setLoading(false)
        })
    } else {
      showMessage("Password Does Not Match")
    }
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
          <h1 className="mb-4 text-2xl">Sign Up</h1>
          <form action="/api/sign-up" onSubmit={createUser}>
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
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="input"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />

              <button
                className={"btn btn-primary my-4 " + (loading ? "loading" : "")}
              >
                Sign Up
              </button>

              <div className="text-red-500 my-2">{message}</div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp

export async function getServerSideProps({ req, res }) {
  const { uid } = req.cookies

  if (uid) {
    console.log(uid)

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
