import { useState } from 'react'
import { useRouter } from 'next/router'
import NavigationLink from './NavigationLink'
import MenuButton from '../../ui/Buttons/MenuButton'
import { HEADER_LINKS } from '../../../constants/links'

function HeaderNavigation() {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)
  const router = useRouter()
  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="px-2 pt-2 space-y-1 sm:px-2 sm:pt-2 sm:pb-3 sm:space-y-1 sm:flex"
      id={MOBILE_MENU_ID}
    >
      <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
        <MenuButton
          open={open}
          setOpen={setOpen}
          ariaControl={MOBILE_MENU_ID}
          sRMessage="Open main menu"
        />
      </div>
      <ul role="menu" className={open ? 'block sm:block' : 'hidden sm:block'}>
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
