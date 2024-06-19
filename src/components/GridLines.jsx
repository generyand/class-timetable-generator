import React from "react";
import RowLines from "./RowLines";

export default function GridLines() {
  return (
    <div className="gridlines | absolute grid grid-rows-15 inset-0 border-collapse z-[-1]">
      {[...Array(15)].map((_, i) => (
        <RowLines key={i} index={i} />
      ))}
    </div>
  );
}
