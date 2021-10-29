export default function TwoCols({ children, col }) {
  const _col = col ? col : 2;
  const columns = Array(Number(_col)).fill("1fr").join(" ");
  return (
    <div class={`mdx-${_col}cols p-8 gap-8`}>
      {children}
      <style>{`
      .mdx-${_col}cols {
        display: grid;
        grid-template-columns: ${columns};
      }
      `}</style>
    </div>
  );
}
