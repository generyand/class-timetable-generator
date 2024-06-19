import React from "react";
import Column from "./Column";

export default function Row({ index }) {
  return (
    <div className="row | row-span-1 col-span-full grid grid-cols-6 relative">
      {[...Array(6)].map((_, i) => (
        <Column key={i} />
      ))}

      <p className="absolute text-[.5rem] md:text-xs sm:text-[.625rem] -left-6 top-[-.375rem] sm:-left-8 sm:-top-2 md:-left-9 text-end w-[5ch]">
        {index + 7 > 11 ? ((index + 7) % 12) + "PM" : index + 7 + "AM"}
      </p>
    </div>
  );
}
