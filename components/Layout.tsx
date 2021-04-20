import React, { ReactNode } from "react";

import Container from "./Container";
import ImageBackground from "../components/ImageBackground";
import MyHead from "./MyHead";
import Header from "./Header";
import Footer from "./Footer";

import "tailwindcss/tailwind.css";

type Props = {
  children?: ReactNode;
  title: string;
  description: string;
  styles: string;
};

const Layout = ({
  children,
  title,
  description,
  styles
}: Props) => (
  <Container>
    <MyHead title={title} description={description} />
    <ImageBackground styles={styles}>
      <Header />
      {children}
    </ImageBackground>
    <Footer />
  </Container>
);

export default Layout;
