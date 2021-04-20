import React from "react";

import Brand from "./Brand";

const Header = () => (
  <header className="bg-gray-800">
    <a href="#main" className="sr-only focus:not-sr-only">
      Skip to content
    </a>
    <div className="h-16 px-2 pt-2 pb-3 sm:justify-between sm:flex-shrink-0 sm:px-2 sm:mx-auto sm:relative sm:flex sm:items-center sm:max-w-7xl lg:px-8">
      <Brand src="/logo-light.svg" width={60} height={60} />
    </div>
  </header>
);

export default Header;
