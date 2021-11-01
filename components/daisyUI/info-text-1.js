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
      <span className={`font-light text-xl`}>{children}</span>
    </p>
  );
};
