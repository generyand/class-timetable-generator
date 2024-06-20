import React from "react";

function HighlightBackground() {
  return (
    <div className="spotlight-background | h-full w-full inset-0 absolute z-[-1] flex justify-end">
      <div className="blob | z-[-4] bg-cyan-400 opacity-60 w-[5%] h-[15rem] transform rotate-[-50deg] -mt-20 mr-[25%] blur-2xl rounded-lg" />
    </div>
  );
}

export default HighlightBackground;
// clamp(..., 10vw, ...)
