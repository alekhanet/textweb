export default function Section({ children, center }) {
  return (
    <section
      className={
        "w-full my-32 " +
        (center ? "flex flex-col items-center px-12 text-center" : "")
      }
    >
      {children}
    </section>
  )
}
