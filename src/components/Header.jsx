import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center w-full z-[10]">
      {/* NavHeader */}
      <div className="flex items-center gap-3 px-3 py-2 sm:gap-4">
        {/* Menu Button */}
        <button onClick={() => alert("clicked")} className="" type="button">
          <Bars3BottomLeftIcon className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Logo />
      </div>

      {/* Table Header */}
      <h1></h1>
    </header>
  );
}
