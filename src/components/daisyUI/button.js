export default function Button({ children, primary, secondary }) {
  let variant
  if (secondary) {
    variant = "secondary"
  } else if (primary) {
    variant = "primary"
  } else {
    variant = "primary"
  }

  return <button class={"my-4 btn btn-" + variant}>{children}</button>
}
