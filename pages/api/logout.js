import Cookies from "cookies"
import { fireAuth } from "../../utils/fire-client"

const handler = async (req, res) => {
  const cookies = new Cookies(req, res)

  try {
    fireAuth.signOut()
    cookies.set("uid")

    return res.status(200).json({
      message: {
        ok: true,
      },
    })
  } catch (e) {
    return res.status(500).json({ error: "Unexpected error." })
  }
}

export default handler
