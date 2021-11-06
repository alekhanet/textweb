import React, { useEffect, useState } from "react"

import { HOSTNAME } from "../../config"

const Dashboard = ({ uid }) => {
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/get-pages", {
      method: "POST",
      body: JSON.stringify({
        uid,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.ok) {
          setPages(data.pages)
        }
      })
  }, [])

  return (
    <div className="p-8 bg-gray-800 rounded-2xl">
      <h1 className="text-2xl">List of pages published</h1>

      {pages.length > 0 ? (
        pages.map((page) => {
          return (
            <a
              href={`http://${page.name}.${HOSTNAME}`}
              className="px-4 py-2 bg-gray-600 block w-min my-2 hover:bg-gray-700 rounded-md"
            >
              {page.name}
            </a>
          )
        })
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default Dashboard
