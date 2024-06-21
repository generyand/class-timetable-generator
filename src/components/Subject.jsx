import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Subject({ data }) {
  return (
    /* FINAL */
    <motion.div
      initial={{ opacity: 0, width: 0, height: 0 }}
      animate={{ opacity: 1, width: "100%", height: "100%" }}
      transition={{ duration: 0.5, delay: 0.25 }}
      style={{
        gridColumnStart: data.colStart,
        gridColumnEnd: data.colEnd,
        gridRowStart: data.rowStart,
        gridRowEnd: data.rowEnd,
      }}
      className="bg-cyan-700 outline outline-cyan-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-50 active:bg-opacity-80 hover:bg-opacity-80 text-red-100 p-[0.1rem] md:p-2 overflow-hidden m-[.1rem] cursor-pointer flex justify-between"
    >
      {/* <div >
        
      </div> */}
      <div>
        <p className="text-xs font-bold truncate sm:text-sm md:text-base">
          {data.title} | {data.code}
        </p>
        <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90 font-light">
          {data.dayStart.toUpperCase().slice(0, 3)} -{" "}
          {data.dayEnd.toUpperCase().slice(0, 3)}
        </p>
        <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90 font-light">
          {data.timeStart} - {data.timeEnd}
        </p>
      </div>

      <p className="place-self-end text-[.625rem] self-start sm:text-[.75rem] md:text-[.875rem] opacity-90 font-light">
        {data.room}
      </p>
    </motion.div>
  );
}
