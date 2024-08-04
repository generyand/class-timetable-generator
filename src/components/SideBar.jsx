import React from "react";
import {
  XMarkIcon,
  DocumentTextIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { motion, spring, useSpring } from "framer-motion";
import Logo from "./Logo";

function SideBar({ handleSideBarVisible, handleClearSchedule }) {
  const handleClear = () => {
    handleSideBarVisible();
    handleClearSchedule();
  };

  return (
    <div className="fixed inset-0 z-[70]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleSideBarVisible}
        className="absolute inset-0 bg-opacity-80 bg-gray-950"
      >
        asdfasdf
      </motion.div>
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.1 }}
        className="menu | w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 h-full fixed z-[100] bg-gray-950 "
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
            <li className="py-3 hover:bg-cyan-500">
              <button className="flex items-center w-full gap-2 mx-4">
                <DocumentTextIcon className="w-6 h-6" />
                About
              </button>
            </li>
            <li className="py-3 hover:bg-cyan-500">
              <button
                onClick={handleClear}
                className="flex items-center w-full gap-2 mx-4"
              >
                <TrashIcon className="w-6 h-6" />
                Clear Schedule
              </button>
            </li>
          </ul>
        </main>
      </motion.aside>
    </div>
  );
}

export default SideBar;
