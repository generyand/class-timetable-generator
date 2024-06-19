import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Subject({ data }) {
  return (
    /* FINAL */
    <div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        gridColumnStart: data.colStart,
        gridColumnEnd: data.colEnd,
        gridRowStart: data.rowStart,
        gridRowEnd: data.rowEnd,
      }}
      className="bg-cyan-700 outline outline-cyan-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-50 active:bg-opacity-80 hover:bg-opacity-80 transition text-red-100 p-[0.1rem] md:p-2 overflow-hidden m-[.1rem] cursor-pointer"
    >
      <p className="text-xs font-bold sm:text-sm md:text-base">{data.title}</p>
      <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90">
        {data.dayStart.toUpperCase()} - {data.dayEnd.toUpperCase()}
      </p>
      <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90">
        {data.timeStart} - {data.timeEnd}
      </p>
    </div>
  );
}
