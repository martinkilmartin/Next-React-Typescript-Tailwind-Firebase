import React, { useState } from "react";

import MenuButton from "../ui/Buttons/MenuButton";
import NavigationLinks from "./NavigationLinks";

function Navigation() {
  const MOBILE_MENU_ID = "mobile-menu";
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div
        className="px-2 pt-2 space-y-1 sm:px-2 sm:pt-2 sm:pb-3 sm:space-y-1 sm:flex"
        id={MOBILE_MENU_ID}
      >
        <div className="relative inset-y-0 left-0 flex items-center sm:hidden">
          <MenuButton
            open={open}
            setOpen={setOpen}
            ariaControl={MOBILE_MENU_ID}
          />
        </div>
        {!open ? <NavigationLinks /> : ""}
      </div>
    </nav>
  );
}

export default Navigation;
