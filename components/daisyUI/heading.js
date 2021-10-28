export default function Heading({ children, variant = "" }) {
  const headings = {
    h1: <h1 className="text-5xl my-4 ">{children}</h1>,
    h2: <h2 className="text-4xl my-4 ">{children}</h2>,
    h3: <h3 className="text-3xl my-4 ">{children}</h3>,
    h4: <h4 className="text-2xl my-4 ">{children}</h4>,
    h5: <h5 className="text-xl my-4 ">{children}</h5>,
    h6: <h6 className="text-lg my-4 ">{children}</h6>,
  }

  const variantDiv = headings[variant]

  if (variantDiv) {
    return variantDiv
  }

  return <h1>{children}</h1>
}
