import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Main = ({ children, title = 'Default H1' }: Props) => (
  <main id="main" className="bg-gray-100">
      <h1>{title}</h1>
    {children}
  </main>
);

export default Main;
