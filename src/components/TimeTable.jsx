import React from "react";
import GridLines from "./GridLines";
import Subject from "./Subject";
import { mockData } from "../utils/mockData";
import { AnimatePresence } from "framer-motion";
import { memo } from "react";

function TimeTable() {
  // alert("TimeTable Rerendered!");
  return (
    <div className="timetable | relative grid grid-cols-6 border border-collapse rounded-md mx-7 grid-rows-30 sm:mx-8 md:mx-10 lg:mx-12 border-neutral-800 mb-8 ">
      {/* A Grid for guidelines */}
      <GridLines />
      <AnimatePresence>
        {mockData.map((data) => (
          <Subject data={data} key={data.id} />
        ))}
      </AnimatePresence>

      {/* <div className="col-start-1 col-end-4 row-start-1 row-end-4 bg-red-700 outline outline-red-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-80 text-red-100 p-[0.1rem] md:p-2 flex justify-center items-center m-[0.15rem]"></div> */}
    </div>
  );
}

export default memo(TimeTable);
