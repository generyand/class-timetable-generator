import React from "react";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import Logo from "./Logo";

export default function MobileNavHeader() {
  return (
    <div className="nav-header | flex items-center gap-3 py-3 sm:gap-4 px-2 sm:px-8 md:px-10 lg:px-12 border-b border-neutral-800 bg-gray-900">
      {/* Menu Button */}
      <button
        onClick={() => alert("Menu Button Clicked!")}
        className=""
        type="button"
      >
        <Bars3BottomLeftIcon className="w-6 h-6" />
      </button>

      {/* Logo */}
      <Logo />
    </div>
  );
}
