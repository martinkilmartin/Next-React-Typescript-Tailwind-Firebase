import Brand from '../ui/Brand'
import HeaderNavigation from './Navigation/HeaderNavigation'

type Props = {
  brandName?: string
}

const Header = ({ brandName }: Props) => (
  <header>
    <div className="mb-2 text-base shadow-lg navbar bg-base">
      <Brand brandName={brandName} />
      <HeaderNavigation />
    </div>
  </header>
)

export default Header
