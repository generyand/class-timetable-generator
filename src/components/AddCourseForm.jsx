import React, { useEffect, memo } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HighlightBackground from "./HighlightBackground";
import getRandomCourse from "../utils/getRandomCourse";
import TimeRangePick from "./TimeRangePick";
import DayRangePick from "./DayRangePick";

function AddCourseForm({ setAddSubjFormVisible, handleAddCourse }) {
  const [courseTitle, setCourseTitle] = useState("CCE 101");
  const [classCode, setClassCode] = useState("1492");
  const [classRoom, setClassRoom] = useState("CLB 2");
  const [timeStart, setTimeStart] = useState("08:00");
  const [timeEnd, setTimeEnd] = useState("09:00");
  const [dayStart, setDayStart] = useState("Monday");
  const [dayEnd, setDayEnd] = useState("Friday");
  const [randomCourse, setRandomCourse] = useState("");

  const handleAddSubject = (e) => {
    e.preventDefault();

    const newCourseObj = {
      id: classCode,
      code: classCode,
      room: classRoom,
      title: courseTitle,
      timeStart: timeStart,
      timeEnd: timeEnd,
      dayStart: dayStart,
      dayEnd: dayEnd,
    };

    handleAddCourse(newCourseObj);
    setAddSubjFormVisible(false);
  };

  useEffect(() => {
    setRandomCourse(getRandomCourse());
  }, [setAddSubjFormVisible]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="add-subject-form | fixed inset-0 z-[10] flex items-center justify-center"
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
        <div className="title-code-room | border-b py-4 border-b-gray-800 mb-4">
          <div className="subject-title-and-color | flex mt-6 items-center ">
            <input
              onChange={(e) => setCourseTitle(e.target.value)}
              value={courseTitle}
              type="text"
              placeholder={`Course Title (e.g., ${randomCourse})`}
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
            onChange={(e) => setClassCode(e.target.value)}
            value={classCode}
            type="text"
            placeholder="Class Code"
            className="w-full mt-4 text-base font-light leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
          />

          <input
            onChange={(e) => setClassRoom(e.target.value)}
            value={classRoom}
            type="text"
            placeholder="Room"
            className="w-full mt-4 text-base font-light leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>

        <TimeRangePick setTimeStart={setTimeStart} setTimeEnd={setTimeEnd} />

        <DayRangePick setDayStart={setDayStart} setDayEnd={setDayEnd} />

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

export default memo(AddCourseForm);
