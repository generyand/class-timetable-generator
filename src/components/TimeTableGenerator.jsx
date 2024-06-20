import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import TimeTable from "./TimeTable";
import AddSubjectButton from "./AddSubjectButton";
import AddSubjectForm from "./AddSubjectForm";
import { AnimatePresence } from "framer-motion";
import { convertTime, convertDay } from "../utils/durationConversion";

export default function TimeTableGenerator() {
  const [addSubjFormVisible, setAddSubjFormVisible] = useState(false);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    if (addSubjFormVisible) {
      document.body.classList.add("scroll-disabled");
    } else {
      document.body.classList.remove("scroll-disabled");
    }
  }, [addSubjFormVisible]);

  const handleAddCourse = (newSubject) => {
    const newCourse = {
      ...newSubject,
      colStart: convertDay(newSubject.dayStart),
      colEnd: convertDay(newSubject.dayEnd) + 1,
      rowStart: convertTime(newSubject.timeStart),
      rowEnd: convertTime(newSubject.timeEnd),
    };
    setSubjects([...subjects, newCourse]);

    console.log(subjects);
  };

  return (
    <div className="timetable-generator | relative">
      {/* <Menu /> */}
      <Header />
      <TimeTable subjects={subjects} />

      {/* Add Course Button */}
      <AddSubjectButton setAddSubjFormVisible={setAddSubjFormVisible} />

      <AnimatePresence>
        {addSubjFormVisible && (
          <AddSubjectForm
            setAddSubjFormVisible={setAddSubjFormVisible}
            handleAddCourse={handleAddCourse}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
