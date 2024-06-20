import React from "react";
import { useState } from "react";

function TimeRangePick() {
  const [timeStartHour, setTimeStartHour] = useState("07");
  // const [timeStartMin, setTimeStartMin] = useState("00");

  return (
    <div className="flex flex-col items-center mb-8 time-range-pick">
      <h2 className="mb-2">Time</h2>
      <div className="flex justify-center w-full inputs">
        <div className="flex justify-around w-full gap-4 ">
          <div className="time-start | text-center">
            <p className="mb-2 text-sm font-light">From</p>
            <div className="flex items-center overflow-hidden text-center rounded-md bg-sky-900">
              <select
                onChange={() => {
                  console.log(e.target.value);
                }}
                defaultValue="07"
                name="time-start-hour"
                id="time-start-hour"
                className="px-4 py-2 text-white bg-transparent border-none outline-none appearance-none bg-sky-900 focus:outline-none"
              >
                <option selected={true}>07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <p>:</p>
              <select
                name="time-start-hour"
                id="time-start-hour"
                className="px-4 py-2 text-white bg-transparent appearance-none bg-sky-900 focus:outline-none"
              >
                <option defaultValue={"00"} selected={true}>
                  00
                </option>
                <option value="PM">30</option>
              </select>
              <select
                name="time-start-hour"
                id="time-start-hour"
                className="py-2 pl-2 pr-4 text-white bg-transparent appearance-none bg-sky-900 focus:outline-none"
              >
                <option selected={true} defaultValue="AM">
                  AM
                </option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
          <div className="time-end | text-center ">
            <p className="mb-2 text-sm font-light">To</p>
            <div className="flex items-center overflow-hidden text-center rounded-md bg-sky-900">
              <select
                defaultValue={"08"}
                name="time-end-hour"
                id="time-end-hour"
                className="px-4 py-2 text-white bg-transparent border-none outline-none appearance-none bg-sky-900 focus:outline-none"
              >
                <option value="07">07</option>
                <option selected={true} value="08">
                  08
                </option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <p>:</p>
              <select
                name="time-end-hour"
                id="time-end-hour"
                className="px-4 py-2 text-white bg-transparent appearance-none bg-sky-900 focus:outline-none"
              >
                <option selected={true} value="AM">
                  00
                </option>
                <option value="PM">30</option>
              </select>
              <select
                name="time-end-hour"
                id="time-end-hour"
                className="py-2 pl-2 pr-4 text-white bg-transparent appearance-none bg-sky-900 focus:outline-none"
              >
                <option selected={true} value="AM">
                  AM
                </option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeRangePick;
