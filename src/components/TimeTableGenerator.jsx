import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import TimeTable from "./TimeTable";

import { AnimatePresence } from "framer-motion";
import { convertTimeToRow, convertDayToColumn } from "../utils/conversions";
import ButtonWithCourseForm from "./ButtonWithCourseForm";

export default function TimeTableGenerator() {
  const [courses, setCourses] = useState([]);

  const handleAddCourse = (course) => {
    const newCourse = {
      ...course,
      colStart: convertDayToColumn(course.dayStart),
      colEnd: convertDayToColumn(course.dayEnd) + 1,
      rowStart: convertTimeToRow(course.timeStart),
      rowEnd: convertTimeToRow(course.timeEnd),
    };

    setCourses([...courses, newCourse]);
  };

  return (
    <div className="timetable-generator | relative">
      {/* <Menu /> */}
      <Header />
      <TimeTable subjects={courses} />
      <ButtonWithCourseForm handleAddCourse={handleAddCourse} />
    </div>
  );
}
