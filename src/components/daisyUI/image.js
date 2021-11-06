export default function Image({ src, classes }) {
  return (
    <div className="h-full overflow-hidden rounded-3xl m-6">
      <img
        src={src}
        alt="some image"
        className={"h-full rounded-3xl" + classes}
      />
    </div>
  )
}
