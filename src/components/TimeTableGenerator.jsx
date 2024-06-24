import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import TimeTable from "./TimeTable";
import { convertTimeToRow, convertDayToColumn } from "../utils/conversions";
import ButtonWithCourseForm from "./ButtonWithCourseForm";
import Navigation from "./Navigation";
import SideBar from "./SideBar";

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
    <div className="timetable-generator | relative ">
      <SideBar />
      <Header />
      <TimeTable subjects={courses} />
      <ButtonWithCourseForm handleAddCourse={handleAddCourse} />
    </div>
  );
}
