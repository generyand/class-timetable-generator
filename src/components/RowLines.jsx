import React from "react";
import ColumnLines from "./ColumnLines";
import { getTimeIn12HourFormat } from "../utils/getTimeIn12HourFormat";

export default function RowLines({ index }) {
  return (
    <div className="row | row-span-1 col-span-full grid grid-cols-6 relative">
      <ColumnLines />

      {/* Horizontal Dashed Lines */}
      <p className="absolute top-[50%] border-b border-dashed border-b-neutral-800 w-full"></p>

      {/* Time Label */}
      <p className="absolute text-[.45rem] md:text-[.7rem] sm:text-[.625rem] -left-[1.6rem] bottom-[-.35rem] sm:-left-8 sm:-bottom-2 md:-left-9 text-end w-[5ch]">
        {getTimeIn12HourFormat(index)}
      </p>
    </div>
  );
}