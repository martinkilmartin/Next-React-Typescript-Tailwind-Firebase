import Brand from '../ui/Brand'
import HeaderNavigation from './Navigation/HeaderNavigation'
import SearchInput from '../ui/Inputs/SearchInput'

type Props = {
  brand: string
  logo: string
}

const Header = ({ brand, logo }: Props) => (
  <header>
    <Brand alt={brand} logo={logo} />
    <HeaderNavigation />
    <SearchInput />
  </header>
)

export default Header
