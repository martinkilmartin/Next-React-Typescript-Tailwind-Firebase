import { useRouter } from 'next/router'
import NavigationLink from '../Navigation/NavigationLink'
import { FOOTER_LINKS } from '../../../constants/links'

function FooterNavigation() {
  const router = useRouter()
  return (
    <>
      {FOOTER_LINKS.map((link, index) => (
        <div
          className="px-4 lg:w-1/4 md:w-1/2 sm:w-3/12"
          key={link.title + index}
        >
          <h2 className="mb-3 text-lg font-medium tracking-widest title-font text-base-content">
            {link.title}
          </h2>
          <ul role="menu" className="mb-10 list-none">
            {link.links.map((link, index) => (
              <li role="none" key={link.text + index}>
                <NavigationLink
                  href={link.path.toString()}
                  ariaCurrent={
                    router.asPath === link.path.toString() ? 'page' : false
                  }
                  text={link.text}
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}

export default FooterNavigation
