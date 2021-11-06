import { collection, getDocs, query, where } from "firebase/firestore"

import { fireDB } from "../../utils/fire-client"

const handler = async (req, res) => {
  const { uid } = req.body

  try {
    if (!uid) {
      return res
        .status(404)
        .json({ message: "Something Went Wrong. Please Log In Again. 1" })
    }
    const pagesCollection = collection(fireDB, "pages")
    const pagesQ = query(pagesCollection, where("uid", "==", uid))
    const pagesSnap = await getDocs(pagesQ)
    const pages = []
    pagesSnap.forEach((page) => pages.push(page.data()))

    if (pages.length > 0) {
      return res.status(200).json({ pages, ok: true })
    }
  } catch (e) {
    return res
      .status(404)
      .json({ message: "Something Went Wrong. Please Log In Again. 2" })
  }
}

export default handler
