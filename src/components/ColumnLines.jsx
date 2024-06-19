import React from "react";

export default function ColumnLines() {
  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div key={i} className="column | outline outline-1 outline-neutral-800"></div>
      ))}
    </>
  );
}
