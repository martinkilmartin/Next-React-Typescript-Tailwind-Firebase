import React from "react";

import Brand from "./Brand";

type Props = {
  styles?: string;
};

const Header = ({
  styles = "h-20 px-2 pt-2 pb-3 sm:justify-between sm:flex-shrink-0 sm:px-2 sm:mx-auto sm:relative sm:flex sm:items-center sm:max-w-7xl lg:px-8",
}: Props) => (
  <header>
    <a href="#main" className="sr-only focus:not-sr-only">
      Skip to content
    </a>
    <div className={styles}>
      <Brand
        alt="MCT Irish Tours logo"
        src="/MCT-Irish-Tours-Logo.png"
        width={400}
        height={80}
      />
    </div>
  </header>
);

export default Header;
