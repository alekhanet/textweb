import { addDoc, collection } from "firebase/firestore"

import { fireDB } from "../../utils/fire-client"

const handler = async (req, res) => {
  const { uid, name, content, timeCreated } = req.body

  try {
    if (!uid) {
      return res
        .status(404)
        .json({ message: "Cannot Publish Page. Must Log In" })
    }

    const pagesCollection = collection(fireDB, "pages")
    const docRef = await addDoc(pagesCollection, {
      uid,
      content,
      timeCreated,
      name,
    })

    if (docRef.id) {
      return res.status(200).json({
        message: "Page Published Successfully!",
        ok: true,
      })
    }

    return res.status(400).json({ message: "Invalid User" })
  } catch (e) {
    return res.status(404).json({ message: "Something Went Wrong!" })
  }
}

export default handler
