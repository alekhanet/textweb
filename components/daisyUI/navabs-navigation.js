export default function NavbarNavigation({ children, start, classes }) {
  const _position = start ? "start" : "end";
  const _children = [];
  if (children) {
    children.forEach((element, i) => {
      _children.push(
        <div key={i} className="ml-1 mr-1">
          {element}
        </div>
      );
    });
  }
  return (
    <div className={`justify-${_position} ${classes} w-full`}>{_children}</div>
  );
}
