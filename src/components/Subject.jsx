import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { convert12FormatTo24 } from "../utils/conversions";

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
      className="bg-cyan-700/50 border border-cyan-700 rounded-xs md:rounded-md active:bg-cyan-700/80 hover:bg-cyan-700/60 text-red-100 p-[0.1rem] md:p-2 overflow-hidden cursor-pointer flex justify-between flex-wrap "
    >
      <div className="self-stretch flex-1 ">
        <p className="text-xs font-bold sm:text-sm md:text-base">
          {data.title}{" "}
          {data.title && (
            <>
              <span className="mx-[0.1rem] font-light">|</span> {data.code}
            </>
          )}
        </p>
        <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90 font-light">
          {data.dayStart.toUpperCase().slice(0, 3)} -{" "}
          {data.dayEnd.toUpperCase().slice(0, 3)}
        </p>
        <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90 font-light">
          {convert12FormatTo24(data.timeStart)} -{" "}
          {convert12FormatTo24(data.timeEnd)}
        </p>
      </div>

      <div className="place-self-end text-[.625rem] sm:text-[.75rem] md:text-[.875rem] opacity-90 font-light flex items-center justify-end text-end  flex-1">
        {data.room && (
          <BuildingOfficeIcon className="inline w-[.625rem] sm:w-[.75rem] md:w-[.875rem] aspect-square mr-[.1rem] sm:mr-[.25rem] sm:mt-0" />
        )}{" "}
        <p>{data.room}</p>
      </div>
    </motion.div>
  );
}
