import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import TimeTable from "./TimeTable";
import AddSubjectButton from "./AddSubjectButton";
import AddSubjectForm from "./AddSubjectForm";
import { AnimatePresence } from "framer-motion";

export default function TimeTableGenerator() {
  const [addSubjFormVisible, setAddSubjFormVisible] = useState(false);

  useEffect(() => {
    if (addSubjFormVisible) {
      document.body.classList.add("scroll-disabled");
    } else {
      document.body.classList.remove("scroll-disabled");
    }
  }, [addSubjFormVisible]);

  return (
    <div className="timetable-generator | relative">
      {/* <Menu /> */}
      <Header />
      <TimeTable />

      {/* Add Course Button */}
      <AddSubjectButton setAddSubjFormVisible={setAddSubjFormVisible} />

      <AnimatePresence>
        {addSubjFormVisible && (
          <AddSubjectForm setAddSubjFormVisible={setAddSubjFormVisible} />
        )}
      </AnimatePresence>
    </div>
  );
}
