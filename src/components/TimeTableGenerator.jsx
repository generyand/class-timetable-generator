import React, { useEffect } from "react";
import { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";
import TimeTable from "./TimeTable";
import AddSubjectButton from "./AddSubjectButton";
import AddSubjectForm from "./AddSubjectForm";


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
      {/* AddSubjectButton */}
      <AddSubjectButton setAddSubjFormVisible={setAddSubjFormVisible} />
      {addSubjFormVisible && (
        <AddSubjectForm setAddSubjFormVisible={setAddSubjFormVisible} />
      )}
    </div>
  );
}
