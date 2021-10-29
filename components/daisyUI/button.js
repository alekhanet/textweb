export default function Button({
  children,
  primary,
  secondary,
  outline,
  rounded,
  classes,
  icon,
}) {
  let variant;
  if (secondary) {
    variant = "secondary";
  } else if (primary) {
    variant = "primary";
  } else {
    variant = "primary";
  }
  const _classes = `${outline ? "btn-outline" : ""} my-4 btn btn-${variant} ${
    classes ? classes : ""
  } ${rounded ? "rounded-full" : ""}`;
  return icon ? (
    <button className={_classes + "flex flex-col items-center"}>
      <img className="h-1/2 rounded-3xl mr-5" src={icon} />
      <span className="font-normal font-mono text-sm text-l">{children}</span>
    </button>
  ) : (
    <button class={_classes}>{children}</button>
  );
}
