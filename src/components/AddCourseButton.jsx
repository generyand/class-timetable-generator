import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function AddCourseButton({ setAddCourseFormVisible }) {
  return (
    <button
      type="button"
      onClick={() => setAddCourseFormVisible(true)}
      className="fixed flex items-center p-3 transition rounded-full bg-cyan-700 bottom-10 right-10 sm:right-[50%] translate-x-[50%] active:bg-cyan-600"
    >
      <PlusIcon className="w-6 h-6 sm:hidden" />

      <p className="hidden px-2 sm:block">Add a Subject</p>
    </button>
  );
}

export default AddCourseButton;
