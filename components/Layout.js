import Header from "./header"

export default function Layout({ children, isUser }) {
  return (
    <main className="p-4 w-screen h-screen flex flex-col">
      <Header isUser={isUser} />
      <div className="wrapper flex-1">{children}</div>
    </main>
  )
}
