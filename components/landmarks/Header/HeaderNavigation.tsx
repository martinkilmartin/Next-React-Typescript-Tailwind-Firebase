import { useState } from 'react'

import Brand from '../../ui/Brand'
import HeaderMenu from './HeaderMenu'
import MenuButton from '../../ui/Buttons/MenuButton'

type Props = {
  brandName?: string
}

function HeaderNavigation({ brandName }: Props) {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)
  return (
    <nav
      aria-label="Main"
      id={MOBILE_MENU_ID}
      className="container px-6 py-3 mx-auto md:flex"
    >
      <div className="flex items-center justify-between">
        <div>
          <Brand brandName={brandName} />
        </div>
        <div className="flex md:hidden">
          <MenuButton
            open={open}
            setOpen={setOpen}
            ariaControl={MOBILE_MENU_ID}
            sRMessage="Open main menu"
          />
        </div>
      </div>
      <HeaderMenu open={open} />
    </nav>
  )
}

export default HeaderNavigation
