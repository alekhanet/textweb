export default function Header({ companyName, icon, nav = "" }) {
  return (
    <div className="navbar align-middle">
      {icon && (
        <div className="justify-start">
          <img src="https://d9hhrg4mnvzow.cloudfront.net/register.open.money/virtual_card/8faab22a-logo-w-copy-3x.svg" />
        </div>
      )}
      {companyName && (
        <div class="flex-none px-2 mx-2">
          <span class="text-lg font-bold">{companyName}</span>
        </div>
      )}
      <div class="flex-1 justify-end">
        <div class="items-stretch hidden lg:flex">
          {nav &&
            nav.split(",").map((_text, i) => (
              <button
                class={
                  "btn btn-primary btn-sm rounded-full ml-2" +
                  (i !== 0 ? " btn-outline" : "")
                }
                key={_text}
              >
                {_text}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
