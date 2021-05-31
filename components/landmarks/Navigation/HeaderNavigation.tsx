import { useState } from 'react'
import MenuButton from '../../ui/Buttons/MenuButton'
import HeaderMenu from './HeaderMenu'

function HeaderNavigation() {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)
  return (
    <nav aria-label="Main" id={MOBILE_MENU_ID}>
      <HeaderMenu open={open} />
      <MenuButton
        open={open}
        setOpen={setOpen}
        ariaControl={MOBILE_MENU_ID}
        sRMessage="Open main menu"
      />
    </nav>
  )
}

export default HeaderNavigation
