import React from "react";
import Header from "./Header";
import TimeTable from "./TimeTable";

export default function TimeTableGenerator() {
  return (
    <div className="timetable-generator">
      <Header />
      <TimeTable />
    </div>
  );
}
