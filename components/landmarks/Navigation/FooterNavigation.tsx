import { useRouter } from 'next/router'
import NavigationLink from './NavigationLink'
import {
  COMPANY_LINKS,
  SOCIAL_LINKS,
  LEGAL_LINKS,
} from '../../../constants/links'

function HeaderNavigation() {
  const router = useRouter()
  return (
    <nav aria-label="Footer">
      <ul role="menu">
        {COMPANY_LINKS.map((link, index) => (
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
      <ul role="menu">
        {SOCIAL_LINKS.map((link, index) => (
          <li role="none" key={link.text + index}>
            <NavigationLink
              href={link.path.toString()}
              ariaCurrent={
                router.asPath === link.path.toString() ? 'page' : false
              }
              text={link.text}
              icon={link.icon}
            />
          </li>
        ))}
      </ul>
      <ul role="menu">
        {LEGAL_LINKS.map((link, index) => (
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
