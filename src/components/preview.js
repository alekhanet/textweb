import hydrate from "next-mdx-remote/hydrate"
import MDXComponents from "./mdx"

const Preview = ({ mdxPreview }) => {
  let mdx
  try {
    mdx = hydrate(mdxPreview, { components: MDXComponents })
  } 
  catch (e) {}

  return (
    <div className="w-full h-full rounded-lg border-gray-400 flex-1 bg-white p-2 text-black overflow-hidden">
      <div className="h-full overflow-y-scroll">{mdx}</div>
    </div>
  )
}

export default Preview
