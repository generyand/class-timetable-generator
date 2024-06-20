import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HighlightBackground from "./HighlightBackground";

function AddSubjectForm({ setAddSubjFormVisible }) {
  const [subjectTitle, setSubjectTitle] = useState("");
  const [subjectCode, setSubjectcode] = useState("");
  const [subjectRoom, setSubjectRoom] = useState("");
  // const [subjectBGColor, setSubjectBGColor] = useState("");

  const handleAddSubject = (e) => {
    e.preventDefault();
    setAddSubjFormVisible(false);
    console.log("added a subject");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="add-subject-form | fixed inset-0 z-[10]"
    >
      <div
        className="overlay"
        onClick={() => setAddSubjFormVisible(false)}
      ></div>
      <form
        onSubmit={handleAddSubject}
        className="w-full h-[100vh] max-w-[640px] p-4 mx-auto bg-gray-900 z-20 relative sm:h-auto sm:rounded-lg overflow-hidden"
      >
        <HighlightBackground />
        <div className="title-code-room | border-b py-4 border-b-neutral-700 mb-4">
          <div className="subject-title-and-color | flex mt-6 items-center ">
            <input
              onChange={(e) => setSubjectTitle(e.target.value)}
              value={subjectTitle}
              type="text"
              placeholder="Subject Title (e.g., GPE 1)"
              autoFocus
              className="w-full text-xl leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
            />
            {/* Color Choices */}
            <div
              className="color-choices"
              onClick={() => alert("Color change button clicked")}
            >
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

        <div className="time-range-pick">
          <h2 className="mb-2">Time</h2>
          <div className="flex">
            <div className="time-start | flex bg-gray-800 items-center text-center rounded-md">
              {/* <label htmlFor="time-start-hour">From</label> */}
              <select
                name="time-start-hour"
                id="time-start-hour"
                className="px-4 py-2 text-white bg-transparent bg-gray-800 border-none outline-none appearance-none focus:outline-none"
              >
                <option className="p-4 outline-red-700" selected value="07">
                  07
                </option>
                <option
                  className="p-4 border-none outline-none outline-red-700"
                  value="08"
                >
                  08
                </option>
                <option
                  className="p-4 border-none outline-none outline-red-700"
                  value="09"
                >
                  09
                </option>
                <option
                  className="p-4 border-none outline-none outline-red-700"
                  value="10"
                >
                  10
                </option>
                <option
                  className="p-4 border-none outline-none outline-red-700"
                  value="11"
                >
                  11
                </option>
                <option
                  className="p-4 border-none outline-none outline-red-700"
                  value="12"
                >
                  12
                </option>
              </select>
              <p>:</p>
              <select
                name="time-start-hour"
                id="time-start-hour"
                className="px-4 py-2 text-white bg-transparent bg-gray-800 appearance-none focus:outline-none"
              >
                <option selected value="AM">
                  00
                </option>
                <option value="PM">30</option>
              </select>
              <select
                name="time-start-hour"
                id="time-start-hour"
                className="py-2 pl-2 pr-4 text-white bg-transparent bg-gray-800 appearance-none focus:outline-none"
              >
                <option selected value="AM">
                  AM
                </option>
                <option value="PM">PM</option>
              </select>
            </div>
            <div className="time-end"></div>
          </div>
        </div>

        {/* Cancel and Save Buttons */}
        <div className="cancel-and-save | fixed sm:sticky bottom-0 right-0 left-0 flex">
          <button
            onClick={() => setAddSubjFormVisible(false)}
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
      </form>
    </motion.div>
  );
}

export default AddSubjectForm;
