import React from "react";
import TableHeader from "./TableHeader";
import MobileNavHeader from "./MobileNavHeader";

export default function Header() {
  return (
    <header id="header" className="sticky top-0 items-center w-full z-[10]">
      {/* NavHeader */}
      <MobileNavHeader />

      {/* Table Header */}
      <TableHeader />
    </header>
  );
}
