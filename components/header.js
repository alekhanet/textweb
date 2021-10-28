import { useRouter } from "next/router"
import Link from "next/link"

import { HOSTNAME } from "../config"

const Header = ({ isUser }) => {
  const router = useRouter()

  function logOutUser(e) {
    e.preventDefault()

    // https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie
    function get_cookie(name) {
      return document.cookie.split(";").some((c) => {
        return c.trim().startsWith(name + "=")
      })
    }

    function delete_cookie(name, path, domain) {
      if (get_cookie(name)) {
        document.cookie =
          name +
          "=" +
          (path ? ";path=" + path : "") +
          (domain ? ";domain=" + domain : "") +
          ";expires=Thu, 01 Jan 1970 00:00:01 GMT"
      }
    }

    delete_cookie("uid")

    fetch("/api/logout")
      .then((data) => data.json())
      .then((data) => {
        if (data.message.ok) {
          router.reload()
        }
      })
  }

  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">TextWeb</span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          <a
            className="btn btn-ghost btn-sm rounded-btn"
            href={"http://" + HOSTNAME}
          >
            HOME
          </a>
          {isUser ? (
            <>
              <Link href="/editor">
                <a className="btn btn-ghost btn-sm rounded-btn">LIVE EDITOR</a>
              </Link>
              <a
                className="btn btn-ghost btn-sm rounded-btn"
                href="/logout"
                onClick={logOutUser}
              >
                LOG OUT
              </a>
            </>
          ) : (
            <>
              <Link href="/login">
                <a className="btn btn-ghost btn-sm rounded-btn">LOGIN</a>
              </Link>
              <Link href="/sign-up">
                <a className="btn btn-ghost btn-sm rounded-btn">SIGN UP</a>
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Header
