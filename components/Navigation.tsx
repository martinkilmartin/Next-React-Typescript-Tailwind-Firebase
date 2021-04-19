import React, { useState } from "react";

import MenuButton from "./Buttons/MenuButton";
import NavigationLinks from "./NavigationLinks";

function Navigation() {
  const MOBILE_MENU_ID = "mobile-menu";
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <MenuButton
          open={open}
          setOpen={setOpen}
          ariaControl={MOBILE_MENU_ID}
        />
      </div>
      <div className="sm:px-2 sm:pt-2 sm:pb-3 sm:space-y-1 sm:flex" id={MOBILE_MENU_ID}>
        {!open ? <NavigationLinks /> : ''}
      </div>
    </nav>
  );
}

export default Navigation;
