import FooterNavigation from './FooterNavigation'
import Socials from './Socials'
import Address from './Address'
import Copyright from './Copyright'

function Footer() {
  return (
    <footer id="footer" className="text-base-content body-font">
      <div className="divider"></div>
      <div className="container flex flex-col flex-wrap justify-center flex-grow order-first w-full mx-auto -mb-10 text-center md:items-center lg:items-start md:flex-row md:flex-nowrap sm:justify-between md:pr-20">
        <FooterNavigation />
        <Address />
      </div>
      <Socials />
      <Copyright />
    </footer>
  )
}
export default Footer
