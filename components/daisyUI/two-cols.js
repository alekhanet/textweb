export default function TwoCols({ children }) {
  return (
    <div class="mdx-2cols p-8 gap-8">
      {children}
      <style>{`
      .mdx-2cols {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      `}</style>
    </div>
  )
}
