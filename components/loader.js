import React from "react"

const Loader = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="btn btn-ghost loading"></div>
      <style jsx>{`
        .btn.loading:before {
          width: 5rem;
          height: 5rem;
        }
      `}</style>
    </div>
  )
}

export default Loader
