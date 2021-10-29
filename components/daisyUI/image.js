export default function Image({ src, classes , center }) {
  const _class = `${center? "flex justify-center" : ""} h-full overflow-hidden rounded-3xl m-6` 
  return (
    <div className={_class}>
      <img
        src={src}
        alt="some image"
        className={"h-full rounded-3xl" + classes}
      />
    </div>
  )
}
