import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import TimeTable from "./TimeTable";
import { convertTimeToRow, convertDayToColumn } from "../utils/conversions";
import ButtonWithCourseForm from "./ButtonWithCourseForm";
import SideBar from "./SideBar";
import { useLocalStorage } from "../utils/useLocalStorage";
import { AnimatePresence } from "framer-motion";

export default function TimeTableGenerator() {
  const [courses, setCourses] = useState([]);
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const { setItem, getItem, removeItem } = useLocalStorage("subjects");

  const handleSideBarVisible = useCallback(() => {
    setSideBarVisible(!sideBarVisible);
  }, [sideBarVisible]);

  const handleAddCourse = (course) => {
    const newCourse = {
      ...course,
      colStart: convertDayToColumn(course.dayStart),
      colEnd: convertDayToColumn(course.dayEnd) + 1,
      rowStart: convertTimeToRow(course.timeStart),
      rowEnd: convertTimeToRow(course.timeEnd),
    };

    setCourses([...courses, newCourse]);
    setItem([...courses, newCourse]);
  };

  const handleClearSchedule = useCallback(() => {
    setCourses([]);
    removeItem();
  }, []);

  useEffect(() => {
    setCourses(getItem() || []);
  }, []);

  return (
    <div className="timetable-generator | relative">
      <AnimatePresence>
        {sideBarVisible && (
          <SideBar
            handleSideBarVisible={handleSideBarVisible}
            handleClearSchedule={handleClearSchedule}
          />
        )}
      </AnimatePresence>

      <Header handleSideBarVisible={handleSideBarVisible} />
      <TimeTable subjects={courses} />
      <ButtonWithCourseForm handleAddCourse={handleAddCourse} />
    </div>
  );
}
