import { useState } from 'react'
import Brand from '../../ui/Brand'
import MenuButton from '../../ui/Buttons/MenuButton'
import HeaderMenu from './HeaderMenu'

function HeaderNavigation() {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)
  return (
    <nav
      aria-label="Main"
      className="mb-2 shadow-lg navbar rounded-box text-base-content"
      id={MOBILE_MENU_ID}
    >
      <Brand />
      <span className="px-2 text-lg font-bold">Michael Cowell Irish Tours</span>
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
