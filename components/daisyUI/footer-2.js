export default function Footer({
  links = "",
  linkiden,
  twitter,
  facebook,
  instagram,
  companyEmail,
  companyProducts,
  companyFeatures,
  companyPages,
  companyName,
  icon,
  address,
}) {
  return (
    <footer class="text-gray-600 body-font">
      <div
        class="
      container
      px-12
      py-24
      mx-auto
      flex
      md:items-center
      lg:items-start
      md:flex-row md:flex-nowrap
      flex-wrap flex-col
    "
      >
        <div class="w-1/4 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="" class="">
            {icon && <img src={icon} className="h-10" />}
            {companyName && <span class="ml-3 text-xl">{companyName}</span>}
          </a>
          <p class="mt-5 text-sm font-normal">{address}</p>
        </div>
        <div
          class="
        flex-grow flex flex-wrap
        md:pl-20
        -mb-10
        md:mt-0
        mt-10
        md:text-left
        text-center
      "
        >
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-purple-800 text-base mb-3 tracking-widest">
              Company
            </h2>
            <nav class="list-none mb-10">
              {companyPages && (
                <>
                  {companyPages.split(",").map((_c) => (
                    <li>
                      <a href="" class="text-gray-600 hover:text-gray-800">
                        <p class="mt-1 text-sm font-normal">{_c}</p>
                      </a>
                    </li>
                  ))}
                </>
              )}
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-purple-800 text-base mb-3 tracking-widest">
              Features
            </h2>
            <nav class="list-none mb-10">
              {companyPages && (
                <>
                  {companyFeatures.split(",").map((_c) => (
                    <li>
                      <a href="" class="text-gray-600 hover:text-gray-800">
                        <p class="mt-1 text-sm font-normal">{_c}</p>
                      </a>
                    </li>
                  ))}
                </>
              )}
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-medium text-purple-800 text-base mb-3 tracking-widest">
              Solutions
            </h2>
            <nav class="list-none mb-10">
              {companyProducts && (
                <>
                  {companyProducts.split(",").map((_c) => (
                    <li>
                      <a href="" class="text-gray-600 hover:text-gray-800">
                        <p class="mt-1 text-sm font-normal">{_c}</p>
                      </a>
                    </li>
                  ))}
                </>
              )}
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-light text-2xl text-purple-800 text-base mb-3 tracking-widest">
              Let's Talk
            </h2>
            <p className="mt-2">connect with us</p>
            <p className="mt-2">{companyEmail}</p>
            <div className="flex flex-row mt-2">
              {facebook && (
                <a href={facebook}>
                  <img src="https://d9hhrg4mnvzow.cloudfront.net/register.open.money/virtual_card/b861a3ac-social-icon-facebook-colour_100u00u000000000000028.png" />
                </a>
              )}
              {twitter && (
                <a href={twitter}>
                  <img src="https://d9hhrg4mnvzow.cloudfront.net/register.open.money/virtual_card/586a779e-social-icon-twitter-colour_100u00u000000000000028.png" />
                </a>
              )}
              {instagram && (
                <a href={instagram}>
                  <img src="https://d9hhrg4mnvzow.cloudfront.net/register.open.money/virtual_card/8ace8fe4-social-icon-insta-colour_100u00u000000000000028.png" />
                </a>
              )}
              {linkiden && (
                <a href={instagram}>
                  <img src="https://d9hhrg4mnvzow.cloudfront.net/register.open.money/virtual_card/f0527d97-social-icon-linkedin-colour_100u00u000000000000028.png" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
