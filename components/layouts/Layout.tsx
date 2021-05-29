import { ReactNode } from 'react'

import Container from '../containers/Container'
import Banner from '../ui/Banner/Banner'
import Header from '../landmarks/Header'
import Footer from '../landmarks/Footer'

type Props = {
  banner?: boolean
  brandName?: string
  children: ReactNode
}

const Layout = ({ banner = false, brandName, children }: Props) => (
  <Container>
    {banner && <Banner />}
    <Header brandName={brandName} />
    {children}
    <Footer />
  </Container>
)

export default Layout
