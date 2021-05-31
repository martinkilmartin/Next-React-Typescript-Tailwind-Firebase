import Brand from '../ui/Brand'
import HeaderNavigation from './Navigation/HeaderNavigation'

type Props = {
  brandName?: string
}

const Header = ({ brandName }: Props) => (
  <header>
    <div className="mb-2 shadow-lg navbar bg-neutral text-neutral-content rounded-box">
      <Brand brandName={brandName} />
      <HeaderNavigation />
    </div>
  </header>
)

export default Header
