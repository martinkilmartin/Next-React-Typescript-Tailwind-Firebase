import FooterNavigation from '../Navigation/FooterNavigation'
import Socials from './Socials'
import Address from '../../ui/Address'
import Copyright from '../../ui/Copyright'

function Footer() {
  return (
    <footer id="footer" className="text-base-content body-font">
      <FooterNavigation />
      <Socials />
      <Address />
      <Copyright />
    </footer>
  )
}
export default Footer
