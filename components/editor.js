import { useState } from "react"
import { collection, doc, setDoc } from "firebase/firestore"
import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from "unique-names-generator"

const Editor = ({ mdxCode, setMdxCode }) => {
  const [message, setMessage] = useState("")

  const addPageToCollection = async (name, content) => {
    const pagesCollection = collection(db, "pages")
    await setDoc(doc(pagesCollection, name), {
      name,
      content,
    })
  }

  function publishPage() {
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    })

    addPageToCollection(randomName, mdxCode)
    setMessage(
      "New Page Added: " + randomName + ". Reload page To see it in the list"
    )

    setTimeout(() => {
      setMessage("")
    }, 5000)
  }
  return (
    <div className="flex-1 h-full">
      <textarea
        name="mdxCode"
        id="mdxCode"
        value={mdxCode}
        onChange={(e) => setMdxCode(e.target.value)}
        className="w-full min-h-full border-2 border-gray-400 rounded-lg text-gray-900 font-mono p-2 focus:outline-none focus:border-gray-500"
      />

      <div>{message}</div>
    </div>
  )
}

export default Editor
