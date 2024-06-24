import React from "react";
import GridLines from "./GridLines";
import Subject from "./Subject";
import { AnimatePresence } from "framer-motion";
import TableHeader from "./TableHeader";

function TimeTable({ subjects }) {
  // alert("TimeTable Rerendered!");
  return (
    <div className="timetable | relative grid grid-cols-6 border border-collapse rounded-md mx-7 grid-rows-90 sm:mx-8 md:mx-10 lg:mx-12 border-neutral-800 mb-8">
      <GridLines />
      <AnimatePresence>
        {subjects.map((data) => (
          <Subject data={data} key={data.id} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default TimeTable;
