import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function AddCourseButton({ setAddCourseFormVisible }) {
  return (
    <button
      type="button"
      onClick={() => setAddCourseFormVisible(true)}
      className="fixed flex items-center p-3 transition rounded-full bg-cyan-700 bottom-10 right-10 active:bg-cyan-600"
    >
      <PlusIcon className="w-6 h-6" />

      <p className="hidden px-2 sm:block">Add a subject</p>
    </button>
  );
}

export default AddCourseButton;
