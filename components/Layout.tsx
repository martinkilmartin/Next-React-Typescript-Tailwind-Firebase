import React, { ReactNode } from "react";

import Container from "./Container";
import MyHead from "./MyHead";
import Header from "./Header";

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
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </Container>
);

export default Layout;
