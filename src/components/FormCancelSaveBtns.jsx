import React from "react";

function FormCancelSaveBtns({ setAddCourseFormVisible }) {
  return (
    <div className="cancel-and-save | absolute sm:static bottom-0 right-0 left-0 flex">
      <button
        onClick={() => setAddCourseFormVisible(false)}
        type="button"
        className="flex-1 py-4 transition bg-gray-800 active:bg-cyan-600 sm:rounded-lg sm:mx-2"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="flex-1 py-4 transition bg-gray-800 active:bg-cyan-600 sm:rounded-lg sm:mx-2"
      >
        Save
      </button>
    </div>
  );
}

export default FormCancelSaveBtns;
