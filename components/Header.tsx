import React from "react";

import Brand from "./Brand";
import Navigation from "./Navigation";

const styleClasses = {
  header: "bg-gray-800",
  container:
    "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex-shrink-0 flex items-center items-center justify-between h-16",
};

const Header = () => (
  <header className={styleClasses.header}>
    <div className={styleClasses.container}>
      <Brand src="/logo-light.svg" width={60} height={60} />
      <Navigation />
    </div>
  </header>
);

export default Header;
