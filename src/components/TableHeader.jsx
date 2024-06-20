import React from "react";

export default function TableHeader() {
  return (
    <div className="mt-2 table-header ">
      <div className="text-center table-title">
        <h1 className="text-lg font-semibold sm:text-xl md:text-2xl">
          Time Table #
        </h1>
      </div>
      <div className="days-header | relative grid grid-cols-6 mx-7 sm:mx-8 md:mx-10 lg:mx-12 text-xs sm:text-sm md:text-base lg:text-lg border-collapse text-center">
        <div className="py-2 border-x border-neutral-800">MON</div>
        <div className="py-2 border-x border-neutral-800">TUE</div>
        <div className="py-2 border-x border-neutral-800">WED</div>
        <div className="py-2 border-x border-neutral-800">THU</div>
        <div className="py-2 border-x border-neutral-800">FRI</div>
        <div className="py-2 border-x border-neutral-800">SAT</div>
      </div>
    </div>
  );
}
