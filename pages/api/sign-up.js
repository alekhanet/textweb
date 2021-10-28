import Cookies from "cookies"
import { createUserWithEmailAndPassword } from "firebase/auth"

import { fireAuth } from "../../utils/fire-client"

const handler = async (req, res) => {
  const cookies = new Cookies(req, res)
  const { email, password } = req.body

  try {
    const userC = await createUserWithEmailAndPassword(
      fireAuth,
      email,
      password
    )
    const user = userC.user

    if (user) {
      cookies.set("uid", user.uid, {
        httpOnly: false, // true by default
      })

      return res.status(200).json({
        user: {
          uid: user.uid,
          email: user.email,
        },
      })
    } else {
      return res.status(400).json({ message: "Something Went Wrong" })
    }
  } catch (e) {
    return res.status(404).json({ message: "Wrong Email Or Password" })
  }
}

export default handler
