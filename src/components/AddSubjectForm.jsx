import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HighlightBackground from "./HighlightBackground";
import TimeRangePick from "./TimeRangePick";

function AddSubjectForm({ setAddSubjFormVisible, handleAddCourse }) {
  const [subjectTitle, setSubjectTitle] = useState("");
  const [subjectCode, setSubjectcode] = useState("");
  const [subjectRoom, setSubjectRoom] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");

  const handleAddSubject = (e) => {
    e.preventDefault();

    const newSubject = {
      id: subjectCode,
      code: subjectCode,
      room: subjectRoom,
      title: subjectTitle,
      timeStart: timeStart,
      timeEnd: timeEnd,
      dayStart: dayStart,
      dayEnd: dayEnd,
    };

    handleAddCourse(newSubject);

    setAddSubjFormVisible(false);
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

        {/* <TimeRangePick /> */}

        <div className="time | mb-8 ">
          <div className="flex gap-4">
            <div className="flex flex-col time-start ">
              <label className="mb-2" htmlFor="time-start">
                From
              </label>
              <input
                onChange={(e) => setTimeStart(e.target.value)}
                value={timeStart}
                id="time-start"
                type="text"
                className="w-full px-4 py-2 border-none rounded-md outline-none appearance-none bg-sky-950"
                placeholder="7:00 AM"
              />
            </div>
            <div className="flex flex-col time-end ">
              <label className="mb-2" htmlFor="time-end">
                To
              </label>
              <input
                onChange={(e) => setTimeEnd(e.target.value)}
                value={timeEnd}
                id="time-end"
                type="text"
                className="w-full px-4 py-2 border-none rounded-md outline-none appearance-none bg-sky-950"
                placeholder="8:00 AM"
              />
            </div>
          </div>
        </div>

        <div className="day">
          <div className="flex gap-4">
            <div className="flex flex-col day-start ">
              <label className="mb-2" htmlFor="day-start">
                From
              </label>
              <input
                onChange={(e) => setDayStart(e.target.value)}
                value={dayStart}
                id="day-start"
                type="text"
                className="w-full px-4 py-2 border-none rounded-md outline-none appearance-none bg-sky-950"
                placeholder="Monday"
              />
            </div>
            <div className="flex flex-col day-end ">
              <label className="mb-2" htmlFor="day-end">
                To
              </label>
              <input
                onChange={(e) => setDayEnd(e.target.value)}
                value={dayEnd}
                id="day-end"
                type="text"
                className="w-full px-4 py-2 border-none rounded-md outline-none appearance-none bg-sky-950"
                placeholder="Friday"
              />
            </div>
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
