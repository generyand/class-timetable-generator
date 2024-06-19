import React, { useEffect, useState } from "react";
import { convertDay, convertTime } from "../utils/durationConversion";

export default function Subject({ data }) {
  const [subjectStylingClass, setSubjectStylingClass] = useState("");

  const rowStart = `row-start-${convertTime(data.timeStart)}`;
  const rowEnd = `row-end-${convertTime(data.timeEnd)}`;
  const colStart = `col-start-${convertDay(data.dayStart)}`;
  const colEnd = `col-end-${convertDay(data.dayEnd) + 1}`;
  const dataClass = `${rowStart} ${rowEnd} ${colStart} ${colEnd}`;

  useEffect(() => {
    setSubjectStylingClass(dataClass);
  }, [data]);

  console.log(subjectStylingClass);

  return (
    /* FINAL */
    <div
      className={`bg-red-700 outline outline-red-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-50 text-red-100 p-[0.1rem] md:p-2 overflow-hidden ${subjectStylingClass}`}
    >
      <p className="text-xs font-bold sm:text-sm md:text-base">{data.title}</p>
      <p className="text-[.625rem] sm:text-[.75rem] md:text-[.875rem]">{data.timeStart} - {data.timeEnd}</p>
    </div>

    /* DEBUGGER 1 */
    // <div className={`bg-red-700 ${dataClass}`}>
    //   <p className="text-xs md:text-base">{dataClass}</p>
    // </div>

    /* DEBUGGER 2 */
    // <>
    //   <div
    //     className={`row-start-1 row-end-2 col-start-1 col-end-4 bg-red-700 outline outline-red-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-80 text-red-100 p-[0.1rem] md:p-2 flex justify-center items-center m-[0.15rem]`}
    //   >
    //     <p className="text-xs md:text-base">{dataClass}</p>
    //   </div>

    //   <div
    //     className={`row-start-1 row-end-2 col-start-4 col-end-7 bg-red-700 outline outline-red-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-80 text-red-100 p-[0.1rem] md:p-2 flex justify-center items-center m-[0.15rem]`}
    //   >
    //     <p className="text-xs md:text-base">{dataClass}</p>
    //   </div>
    // </>
  );
}
