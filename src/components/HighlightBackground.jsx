import React from "react";

function HighlightBackground() {
  return (
    <div className="spotlight-background | h-full w-full inset-0 absolute z-[-1] flex justify-end">
      <div className="blob | z-[-4] bg-cyan-400 opacity-60 w-[7%] h-[15rem] transform rotate-[-45deg] -mt-16 mr-[30%]" />
    </div>
  );
}

export default HighlightBackground;
// clamp(..., 10vw, ...)
