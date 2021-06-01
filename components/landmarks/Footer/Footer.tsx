import FooterNavigation from '../Navigation/FooterNavigation'
import Socials from './Socials'
import Address from './Address'
import Copyright from '../../ui/Copyright'

function Footer() {
  return (
    <footer id="footer" className="text-base-content body-font">
      <div className="container flex flex-col flex-wrap mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap">
        <div className="flex flex-wrap justify-center flex-grow order-first w-full -mb-10 text-center sm:justify-between md:pr-20 md:text-left">
          <FooterNavigation />
          <Address />
        </div>
      </div>
      <Socials />
      <Copyright />
    </footer>
  )
}
export default Footer
