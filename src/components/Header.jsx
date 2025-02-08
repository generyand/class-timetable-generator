import React, { memo } from "react";
import TableHeader from "./TableHeader";
import MobileNavHeader from "./MobileNavHeader";

function Header({ handleSideBarVisible }) {
  // alert("Header Rerendered!");
  return (
    <header className="header | sticky top-0 items-center w-full z-60 ">
      {/* NavHeader */}
      <MobileNavHeader handleSideBarVisible={handleSideBarVisible} />

      {/* Table Header */}
      {/* <TableHeader /> */}
    </header>
  );
}

export default Header;
