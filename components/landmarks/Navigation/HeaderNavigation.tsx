import { useState } from 'react'
import Brand from '../../ui/Brand'
import MenuButton from '../../ui/Buttons/MenuButton'
import HeaderMenu from './HeaderMenu'

function HeaderNavigation() {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)
  return (
    <nav
      role="navigation"
      aria-label="Main"
      className="px-2 pt-2 space-y-1 sm:px-2 sm:pt-2 sm:pb-3 sm:space-y-1 sm:flex"
      id={MOBILE_MENU_ID}
    >
      <Brand />
      <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
        <MenuButton
          open={open}
          setOpen={setOpen}
          ariaControl={MOBILE_MENU_ID}
          sRMessage="Open main menu"
        />
      </div>
      <HeaderMenu open={open} />
    </nav>
  )
}

export default HeaderNavigation
