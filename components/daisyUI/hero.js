export default function Hero({ heading, text, call, imgUrl }) {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="flex-col hero-content lg:flex-row-reverse">
        <img src={imgUrl} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="mb-5 text-5xl font-bold">{heading}</h1>
          <p class="mb-5">{text}</p>
          <button class="btn btn-primary">{call}</button>
        </div>
      </div>
    </div>
  )
}
