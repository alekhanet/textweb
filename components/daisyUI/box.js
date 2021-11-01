export default function Box({ children, classes }) {
  const _classes =
    "flex flex-col justify-center p-12" + (classes ? classes : "");
  return <div className={_classes}>{children}</div>;
}
