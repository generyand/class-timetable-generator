import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

function AddSubjectButton({ setAddSubjFormVisible }) {
  return (
    <button
      onClick={() => setAddSubjFormVisible(true)}
      className="fixed p-3 transition rounded-full bg-cyan-700 bottom-10 right-10 active:bg-cyan-600"
    >
      <PlusIcon className="w-6 h-6" />
    </button>
  );
}

export default AddSubjectButton;
