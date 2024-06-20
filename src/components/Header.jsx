import React, { memo } from "react";
import TableHeader from "./TableHeader";
import MobileNavHeader from "./MobileNavHeader";

function Header() {
  // alert("Header Rerendered!");
  return (
    <header className="header | sticky top-0 items-center w-full z-[10]">
      {/* NavHeader */}
      <MobileNavHeader />

      {/* Table Header */}
      <TableHeader />
    </header>
  );
}

export default memo(Header);