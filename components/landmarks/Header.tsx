import HeaderNavigation from './Navigation/HeaderNavigation'

type Props = {
  brandName?: string
}

function Header({ brandName }: Props) {
  return (
    <header>
      <HeaderNavigation brandName={brandName} />
    </header>
  )
}

export default Header
