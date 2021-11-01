export default function TwoCols({ children }) {
  return (
    <div class={`mdx-3cols p-8 gap-8`}>
      {children}
      <style>{`
      .mdx-3cols {
        display: grid;
        grid-template-columns:1fr 1fr 1fr;
      }
      `}</style>
    </div>
  );
}
