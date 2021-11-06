import { useEffect } from "react"

import "../../styles/global.css"
import "../../styles/normalize.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.setAttribute("data-theme", "dark")
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
