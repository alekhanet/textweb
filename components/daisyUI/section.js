export default function Section({ children, center, classes }) {
  return (
    <section
      className={
        "w-full my-16 " +
        (center ? "flex flex-col items-center px-12 text-center" : "") +
        (classes ? classes : "")
      }
    >
      {children}
    </section>
  )
}
