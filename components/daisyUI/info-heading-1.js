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
      <span className={`font-extrabold text-4xl leading-10`}>{children}</span>
    </p>
  );
};
