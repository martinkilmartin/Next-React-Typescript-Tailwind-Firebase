import FooterNavigation from './Navigation/FooterNavigation'
import Address from '../ui/Address'
import Copyright from '../ui/Copyright'

function Footer() {
  return (
    <div className="text-base-content">
      <footer id="footer">
        <FooterNavigation />
        <Address />
        <Copyright />
      </footer>
    </div>
  )
}
export default Footer
