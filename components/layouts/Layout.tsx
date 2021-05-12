import { ReactNode } from 'react'

import Container from '../containers/Container'
import Header from '../landmarks/Header'
import Footer from '../landmarks/Footer'

type Props = {
  children: ReactNode
  brand: string
  logo: string
}

const Layout = ({ brand, logo, children }: Props) => (
  <Container>
    <Header brand={brand} logo={logo} />
    {children}
    <Footer />
  </Container>
)

export default Layout
