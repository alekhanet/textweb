export default ({ icon, children }) => {
  return (
    <div className="flex p-3 rounded-3xl border-2 items-center m-2 max-h-48">
      {icon && <img className="h-1/2 rounded-3xl mr-5" src={icon} />}
      <span className="text-xl font-light max-3/4 text-left"> {children}</span>
    </div>
  );
};
