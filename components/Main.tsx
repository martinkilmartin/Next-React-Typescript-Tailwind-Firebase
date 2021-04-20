import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  styles?: string;
};

const Main = ({ children, styles = '' }: Props) => (
  <main id="main" className={styles}>
    {children}
  </main>
);

export default Main;
