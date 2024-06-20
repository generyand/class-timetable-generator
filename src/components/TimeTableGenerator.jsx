import React from "react";
import { useState } from "react";
import Header from "./Header";
import TimeTable from "./TimeTable";
import AddSubjectButton from "./AddSubjectButton";
import AddSubjectForm from "./AddSubjectForm";

export default function TimeTableGenerator() {
  const [addSubjFormVisible, setAddSubjFormVisible] = useState(false);

  return (
    <div className="timetable-generator | relative">
      <Header />
      <TimeTable />
      {/* AddSubjectButton */}
      <AddSubjectButton setAddSubjFormVisible={setAddSubjFormVisible} />
      {addSubjFormVisible && <AddSubjectForm />}
    </div>
  );
}
