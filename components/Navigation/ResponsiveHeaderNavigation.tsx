import React, { useState } from 'react'
import Brand from '../Brand'
import NavigationLink from './NavigationLink'

function ResponsiveHeaderNavigation() {
  const MOBILE_MENU_ID = 'mobile-menu'
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex flex-wrap items-center justify-between p-6">
      <div className="flex items-center flex-shrink-0 mr-6 text-white">
        <Brand
          alt="MCT Irish Tours logo"
          src="/logos/shamrock.png"
          width={64}
          height={64}
        />
        <span className="hidden ml-4 text-xl font-semibold tracking-tight sm:block">
          Michael Cowell Irish Tours
        </span>
      </div>
      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white"
          aria-controls={MOBILE_MENU_ID}
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          {!open ? (
            <img src="/menu-open.svg" alt="Open" width={24} height={24} />
          ) : (
            <img src="/menu-close.svg" alt="Close" width={24} height={24} />
          )}
        </button>
      </div>
      <div
        className={
          open
            ? 'z-10 flex-grow block w-full sm:flex sm:items-center sm:w-auto'
            : 'z-10 flex-grow hidden w-full sm:flex sm:items-center sm:w-auto'
        }
        onBlur={() => setOpen(!open)}
      >
        <div
          className="text-sm bg-green-500 sm:flex-grow sm:bg-transparent"
          id={MOBILE_MENU_ID}
        >
          <NavigationLink href="/" ariaCurrent="page" text="Home" />
          <NavigationLink href="/tours" ariaCurrent={false} text="Tours" />
          <NavigationLink href="/about" ariaCurrent={false} text="About" />
          <NavigationLink href="/gallery" ariaCurrent={false} text="Gallery" />
          <NavigationLink href="/blog" ariaCurrent={false} text="Blog" />
          <NavigationLink href="/contact" ariaCurrent={false} text="Contact" />
        </div>
      </div>
    </nav>
  )
}

export default ResponsiveHeaderNavigation
