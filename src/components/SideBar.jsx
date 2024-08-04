import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion, spring, useSpring } from "framer-motion";
import Logo from "./Logo";

function SideBar({ handleSideBarVisible, handleClearSchedule }) {
  const handleClear = () => {
    handleSideBarVisible();
    handleClearSchedule();
  };

  return (
    <motion.aside
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.1 }}
      className="menu | w-full sm:w-1/2 md:w-1/3 lg:w-1/4 h-full bg-gray-900 fixed z-[100] sm:bg-gray-950 "
    >
      {/* Header */}
      <header className="header | sticky top-0 items-center w-full flex justify-between border-b border-neutral-800 px-4 py-3 bg-inherit">
        <Logo />
        <button onClick={() => handleSideBarVisible()} className="">
          <XMarkIcon className="w-6 h-6" />
        </button>
      </header>

      <main className="">
        <ul className="flex flex-col text-lg font-normal">
          <li className="py-2 hover:bg-cyan-500">
            <button className="w-full">About</button>
          </li>
          <li className="py-2 hover:bg-cyan-500">
            <button onClick={handleClear} className="w-full">
              Clear Schedule
            </button>
          </li>
        </ul>
      </main>
    </motion.aside>
  );
}

export default SideBar;
