import { useRouter } from 'next/router'
import NavigationLink from './NavigationLink'
import { HEADER_LINKS } from '../../../constants/links'

function HeaderNavigation() {
  const router = useRouter()
  return (
    <nav role="navigation" aria-label="Main">
      <ul role="menu">
        {HEADER_LINKS.map((link, index) => (
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
    </nav>
  )
}

export default HeaderNavigation
