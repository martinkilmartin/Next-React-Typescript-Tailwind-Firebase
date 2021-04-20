import React, { ReactNode } from "react";

import Container from "./Container";
import MyHead from "./MyHead";
import Header from "./Header";
import Footer from "./Footer";

import "tailwindcss/tailwind.css";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = "Default title",
  description = "Default desc",
}: Props) => (
  <Container>
    <MyHead title={title} description={description} />
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
