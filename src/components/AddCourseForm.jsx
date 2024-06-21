import React, { useEffect, memo } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import HighlightBackground from "./HighlightBackground";
import getRandomCourse from "../utils/getRandomCourse";
import TimeRangePick from "./TimeRangePick";
import DayRangePick from "./DayRangePick";
import FormCancelSaveBtns from "./FormCancelSaveBtns";

function AddCourseForm({ setAddSubjFormVisible, handleAddCourse }) {
  const [courseTitle, setCourseTitle] = useState("");
  const [classCode, setClassCode] = useState("");
  const [classRoom, setClassRoom] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [dayStart, setDayStart] = useState("");
  const [dayEnd, setDayEnd] = useState("");
  const [randomCourseTitle, setRandomCourse] = useState("");
  const [buttonsVisible, setButtonsVisible] = useState(false);

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

  const handleOnBlur = () => {
    if (buttonsVisible) setButtonsVisible(false);
    else setButtonsVisible(true);
  };

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
        className="w-full h-[100vh] relative max-w-[640px] p-4 mx-auto bg-gray-900 z-20 sm:h-auto sm:rounded-lg overflow-hidden"
      >
        <HighlightBackground />
        <div className="title-code-room | border-b py-4 border-b-gray-800 mb-4">
          <div className="subject-title-and-color | flex mt-6 sm:m-0 items-center">
            <input
              onFocus={() => setButtonsVisible(false)}
              onBlur={handleOnBlur}
              onChange={(e) => setCourseTitle(e.target.value)}
              value={courseTitle}
              type="text"
              placeholder={`Course Title (e.g., ${randomCourseTitle})`}
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
            onFocus={() => setButtonsVisible(false)}
            onBlur={handleOnBlur}
            onChange={(e) => setClassCode(e.target.value)}
            value={classCode}
            type="text"
            placeholder="Class Code"
            className="w-full mt-4 text-base font-light leading-tight text-white bg-transparent rounded appearance-none focus:outline-none focus:shadow-outline"
          />

          <input
            onFocus={() => setButtonsVisible(false)}
            onBlur={handleOnBlur}
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
        {buttonsVisible && (
          <FormCancelSaveBtns setAddSubjFormVisible={setAddSubjFormVisible} />
        )}
      </form>
    </motion.div>
  );
}

export default memo(AddCourseForm);
