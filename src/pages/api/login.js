import Cookies from "cookies"
import { signInWithEmailAndPassword } from "firebase/auth"

import { fireAuth } from "../../../utils/fire-client"

const handler = async (req, res) => {
  const cookies = new Cookies(req, res)
  const { email, password } = req.body

  try {
    const userC = await signInWithEmailAndPassword(fireAuth, email, password)
    const user = userC.user
    cookies.set("uid", user.uid, {
      httpOnly: false, // true by default
    })

    return res.status(200).json({
      user: {
        uid: user.uid,
        email: user.email,
      },
    })
  } catch (e) {
    return res.status(404).json({ message: "Wrong Email Or Password" })
  }
}

export default handler
