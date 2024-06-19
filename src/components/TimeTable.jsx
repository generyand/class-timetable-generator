import React from "react";
import GridLines from "./GridLines";
import Subject from "./Subject";

export default function TimeTable() {
  const mockData = [
    {
      id: 1,
      title: "Maths",
      timeStart: "07:00",
      timeEnd: "09:00",
      dayStart: "mon",
      dayEnd: "wed",
    },
    {
      id: 2,
      title: "Physics",
      timeStart: "07:00",
      timeEnd: "09:00",
      dayStart: "thu",
      dayEnd: "sat",
    },
    {
      id: 3,
      title: "Biology",
      timeStart: "09:00",
      timeEnd: "10:00",
      dayStart: "mon",
      dayEnd: "fri",
    },
    {
      id: 4,
      title: "Programming",
      timeStart: "10:00",
      timeEnd: "12:00",
      dayStart: "mon",
      dayEnd: "wed",
    },

    {
      id: 5,
      title: "Chemistry",
      timeStart: "10:00",
      timeEnd: "12:00",
      dayStart: "thu",
      dayEnd: "sat",
    },
  ];

  return (
    <div className="relative grid grid-cols-6 m-6 border border-collapse grid-rows-15 sm:m-8 lg:m-12 border-neutral-800 gap-[.25rem]">
      {/* A Grid for guidelines */}
      <GridLines />

      {mockData.map((data) => (
        <Subject data={data} key={data.id} />
      ))}

      {/* <div className="col-start-1 col-end-4 row-start-1 row-end-4 bg-red-700 outline outline-red-700 outline-[0.1rem] rounded-sm md:rounded-md bg-opacity-80 text-red-100 p-[0.1rem] md:p-2 flex justify-center items-center m-[0.15rem]"></div> */}
    </div>
  );
}
