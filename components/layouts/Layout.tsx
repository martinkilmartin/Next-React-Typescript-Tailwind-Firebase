import { ReactNode } from 'react'

import Container from '../containers/Container'
import Banner from '../ui/Banner/Banner'
import Header from '../landmarks/Header'
import Footer from '../landmarks/Footer'

type Props = {
  banner?: boolean
  children: ReactNode
}

const Layout = ({ banner = false, children }: Props) => (
  <Container>
    {banner && <Banner />}
    <Header />
    {children}
    <Footer />
  </Container>
)

export default Layout
