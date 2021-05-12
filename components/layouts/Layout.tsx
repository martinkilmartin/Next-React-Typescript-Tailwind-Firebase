import { ReactNode } from 'react'

import Container from '../containers/Container'
import Header from '../landmarks/Header'
import Footer from '../landmarks/Footer'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
)

export default Layout
