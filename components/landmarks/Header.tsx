import React from 'react'

import ResponsiveHeaderNavigation from './Navigation/ResponsiveHeaderNavigation'

type Props = {
  styles?: string
}

const Header = ({
  styles = 'h-20 px-2 pt-2 pb-3 sm:justify-between sm:flex-shrink-0 sm:px-2 sm:mx-auto sm:relative sm:flex sm:items-center sm:max-w-7xl lg:px-8',
}: Props) => (
  <header>
    <div className={styles}>
      <ResponsiveHeaderNavigation />
    </div>
  </header>
)

export default Header
