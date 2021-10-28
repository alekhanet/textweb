export default function Alert({ children, variant = "info" }) {
  if (!["info", "success", "warning", "error"].includes(variant))
    variant = "info"

  return (
    <div class={"alert alert-" + variant}>
      <div class="flex-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="w-6 h-6 mx-2 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <label>{children}</label>
      </div>
    </div>
  )
}
