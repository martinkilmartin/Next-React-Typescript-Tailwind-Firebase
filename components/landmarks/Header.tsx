import { useState } from 'react'

import Brand from '../ui/Brand'
import MenuButton from '../ui/Buttons/MenuButton'
import HeaderNavigation from './Navigation/HeaderNavigation'

type Props = {
  brandName?: string
}

function Header({ brandName }: Props) {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="flex justify-between w-1 px-2 mx-2 mt-2 sm:hidden">
        <Brand brandName={brandName} />
        <MenuButton
          open={open}
          setOpen={setOpen}
          ariaControl={MOBILE_MENU_ID}
          sRMessage="Open main menu"
        />
      </div>
      <div className="mb-2 text-base shadow-lg navbar bg-base">
        <div className="hidden sm:block">
          <Brand brandName={brandName} />
        </div>
        <HeaderNavigation menuId={MOBILE_MENU_ID} open={open} />
      </div>
    </header>
  )
}

export default Header
