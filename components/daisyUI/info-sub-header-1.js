export default ({ children, left, right, center }) => {
  let alignment = "";
  if (left) {
    alignment = "left";
  } else if (right) {
    alignment = "right";
  } else if (center) {
    alignment = "center";
  }
  return (
    <p className={`${alignment ? `text-${alignment}` : ""}`}>
      <span className={`font-medium text-2xl leading-8 `}>{children}</span>
    </p>
  );
};