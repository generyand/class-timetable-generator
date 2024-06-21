import { convertTimeToRow, convertDayToColumn } from "../utils/durationConversion";

const initialMockData = [
  {
    id: 1,
    title: "IT 26",
    timeStart: "07:00",
    timeEnd: "08:00",
    dayStart: "mon",
    dayEnd: "wed",
  },
  {
    id: 2,
    title: "GE 5: Environmental Science",
    timeStart: "07:00",
    timeEnd: "08:00",
    dayStart: "thu",
    dayEnd: "sat",
  },
  {
    id: 3,
    title: "GE 2",
    timeStart: "08:00",
    timeEnd: "09:00",
    dayStart: "thu",
    dayEnd: "fri",
  },
  {
    id: 4,
    title: "MTH 103",
    timeStart: "09:00",
    timeEnd: "11:00",
    dayStart: "mon",
    dayEnd: "fri",
  },
  {
    id: 5,
    title: "IT 7",
    timeStart: "13:00",
    timeEnd: "14:00",
    dayStart: "mon",
    dayEnd: "wed",
  },
  {
    id: 6,
    title: "GPE 4",
    timeStart: "13:30",
    timeEnd: "14:30",
    dayStart: "thu",
    dayEnd: "sat",
  },
  {
    id: 7,
    title: "IT6",
    timeStart: "14:30",
    timeEnd: "15:30",
    dayStart: "mon",
    dayEnd: "wed",
  },
  {
    id: 8,
    title: "IT6",
    timeStart: "11:00",
    timeEnd: "12:00",
    dayStart: "wed",
    dayEnd: "sat",
  },
];

const mockData = initialMockData.map((data) => {
  return {
    ...data,
    colStart: convertDayToColumn(data.dayStart),
    colEnd: convertDayToColumn(data.dayEnd) + 1,
    rowStart: convertTimeToRow(data.timeStart),
    rowEnd: convertTimeToRow(data.timeEnd),
  };
});

export { mockData };
