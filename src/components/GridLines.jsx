import React from "react";
import Row from "./Row";

export default function GridLines() {
  return (
    <div className="absolute grid grid-rows-15 inset-0 border-collapse z-[-1]">
      {[...Array(15)].map((_, i) => (
        <Row key={i} index={i} />
      ))}
    </div>
  );
}
