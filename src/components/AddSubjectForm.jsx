import React from "react";
import { useState } from "react";

function AddSubjectForm() {
  const [subjectTitle, setSubjectTitle] = useState("");

  return (
    <div className="add-subject-form | fixed inset-0 z-[10]">
      <div className="overlay"></div>
      <form className="w-full h-full max-w-xl p-4 mx-auto bg-red-700 opacity-50 z- md:h-auto outlined">
        <input
          onChange={(e) => setSubjectTitle(e.target.value)}
          value={subjectTitle}
          type="text"
          name="subject-title"
          placeholder="Subject Title (e.g., GE5)"
          className="w-full py-4 text-xl font-light leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}

export default AddSubjectForm;
