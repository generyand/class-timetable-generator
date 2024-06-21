import React from "react";
import GridLines from "./GridLines";
import Subject from "./Subject";
import { mockData } from "../utils/mockData";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";

function TimeTable({ subjects }) {
  // alert("TimeTable Rerendered!");
  return (
    <div className="timetable | relative grid grid-cols-6 border border-collapse rounded-md mx-7 grid-rows-90 sm:mx-8 md:mx-10 lg:mx-12 border-neutral-800 mb-8 place-items-center">
      <GridLines />
      <AnimatePresence>
        {subjects.map((data) => (
          <Subject data={data} key={data.id} />
        ))}
      </AnimatePresence>
    </div>
  );
}

export default memo(TimeTable);
