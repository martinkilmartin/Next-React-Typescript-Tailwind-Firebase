import React, { ReactNode } from "react";

import Container from "./Container";
import Footer from "./Footer";

import "tailwindcss/tailwind.css";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => (
  <Container>
    {children}
    <Footer />
  </Container>
);

export default Layout;
