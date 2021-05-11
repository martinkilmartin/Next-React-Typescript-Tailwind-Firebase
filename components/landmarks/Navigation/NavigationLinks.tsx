import React from 'react'

import NavigationLink from './NavigationLink'

const NavigationLinks = () => (
  <div className="px-2 pt-2 pb-3 space-y-1 small:flex small:space-x-4">
    <NavigationLink href="/" ariaCurrent="page" text="Home" />
    <NavigationLink href="/about" ariaCurrent={false} text="About" />
  </div>
)

export default NavigationLinks
