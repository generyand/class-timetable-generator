import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

function AddSubjectForm({ setAddSubjFormVisible }) {
  const [subjectTitle, setSubjectTitle] = useState("");
  const [subjectCode, setSubjectcode] = useState("");
  const [subjectRoom, setSubjectRoom] = useState("");
  const [subjectBGColor, setSubjectBGColor] = useState("");

  const handleAddSubject = (e) => {
    e.preventDefault();
    setAddSubjFormVisible(false);
    console.log("added a subject");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: "5%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.125 }}
      className="add-subject-form | fixed inset-0 z-[10]"
    >
      <div className="overlay"></div>
      <form
        onSubmit={handleAddSubject}
        className="w-full h-[100vh] max-w-xl p-4 mx-auto bg-gray-900 z-[20] relative sm:h-auto"
      >
        <div className="title-code-room | border-b py-4 border-b-neutral-700">
          <div className="subject-title-and-color | flex mt-6 items-center ">
            <input
              onChange={(e) => setSubjectTitle(e.target.value)}
              value={subjectTitle}
              type="text"
              placeholder="Subject Title (e.g., GE5)"
              autoFocus
              className="w-full text-xl leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
            />
            {/* Color Choices */}
            <div className="color-choices">
              <div className="w-6 h-6 mx-4 rounded-full bg-cyan-500"></div>
            </div>
          </div>

          <input
            onChange={(e) => setSubjectcode(e.target.value)}
            value={subjectCode}
            type="text"
            placeholder="Subject Code"
            className="w-full mt-4 text-base font-light leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
          />

          <input
            onChange={(e) => setSubjectRoom(e.target.value)}
            value={subjectRoom}
            type="text"
            placeholder="Room"
            className="w-full mt-4 text-base font-light leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Cancel and Save Buttons */}
        <div className="cancel-and-save | absolute bottom-0 right-0 left-0 bg-gray-800">
          <button
            onClick={() => setAddSubjFormVisible(false)}
            type="button"
            className="w-1/2 py-4 transition active:bg-cyan-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 py-4 transition active:bg-cyan-600"
          >
            Save
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default AddSubjectForm;
