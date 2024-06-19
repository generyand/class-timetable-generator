import React from "react";
import Column from "./Column";
import { getTimeIn12HourFormat } from "../utils/getTimeIn12HourFormat";

export default function Row({ index }) {
  return (
    <div className="row | row-span-1 col-span-full grid grid-cols-6 relative">
      {[...Array(6)].map((_, i) => (
        <Column key={i} />
      ))}

      {/* Label */}
      <p className="absolute text-[.45rem] md:text-[.7rem] sm:text-[.625rem] -left-6 top-[-.35rem] sm:-left-8 sm:-top-2 md:-left-9 text-end w-[5ch]">
        {getTimeIn12HourFormat(index)}
      </p>
    </div>
  );
}
