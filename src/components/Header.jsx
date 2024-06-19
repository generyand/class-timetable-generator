import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import Logo from "./Logo";
import TimeTable from "./TimeTable";

export default function Header() {
  return (
    <header id="header" className="sticky top-0 items-center w-full z-[10]">
      {/* NavHeader */}
      <div className="nav-header | flex items-center gap-3 py-2 sm:gap-4 px-7 sm:px-8 md:px-10 lg:px-12 border-b border-stone-800">
        {/* Menu Button */}
        <button onClick={() => alert("clicked")} className="" type="button">
          <Bars3BottomLeftIcon className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Logo />
      </div>

      {/* Table Header */}
      <div
        style={{ borderCollapse: "collapse" }}
        className="table-header | relative grid grid-cols-6 mx-7 sm:mx-8 md:mx-10 lg:mx-12 text-xs sm:text-sm md:text-base lg:text-lg mt-6 border-collapse text-center"
      >
        <div className="py-2 border-x border-neutral-700">MON</div>
        <div className="py-2 border-x border-neutral-700">TUE</div>
        <div className="py-2 border-x border-neutral-700">WED</div>
        <div className="py-2 border-x border-neutral-700">THU</div>
        <div className="py-2 border-x border-neutral-700">FRI</div>
        <div className="py-2 border-x border-neutral-700">SAT</div>
      </div>
    </header>
  );
}
