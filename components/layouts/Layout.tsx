import { ReactNode } from 'react'

import Container from '../containers/Container'
import Footer from '../landmarks/Footer'

import 'tailwindcss/tailwind.css'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <Container>
    {children}
    <Footer />
  </Container>
)

export default Layout
