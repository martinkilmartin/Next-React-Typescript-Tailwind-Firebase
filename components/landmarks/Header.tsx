import HeaderNavigation from './Navigation/HeaderNavigation'

type Props = {
  brandName?: string
}

const Header = ({ brandName }: Props) => (
  <header>
    <HeaderNavigation brandName={brandName} />
  </header>
)

export default Header
