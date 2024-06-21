import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import TimeTable from "./TimeTable";
import AddSubjectButton from "./AddSubjectButton";
import AddCourseForm from "./AddCourseForm";
import { AnimatePresence } from "framer-motion";
import { convertTimeToRow, convertDayToColumn } from "../utils/conversions";

export default function TimeTableGenerator() {
  const [addSubjFormVisible, setAddSubjFormVisible] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (addSubjFormVisible) {
      document.body.classList.add("scroll-disabled");
    } else {
      document.body.classList.remove("scroll-disabled");
    }
  }, [addSubjFormVisible]);

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

      {/* Add Course Button */}
      <AddSubjectButton setAddSubjFormVisible={setAddSubjFormVisible} />

      <AnimatePresence>
        {addSubjFormVisible && (
          <AddCourseForm
            setAddSubjFormVisible={setAddSubjFormVisible}
            handleAddCourse={handleAddCourse}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
