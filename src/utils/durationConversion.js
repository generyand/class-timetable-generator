/* DURATION CONVERSION */

// Each time conversion is converted into a number that represents
// the start row and end row of that time in the grid system.
const timeConversion = {
  "07:00": 1,
  "07:30": 2,
  "08:00": 3,
  "08:30": 4,
  "09:00": 5,
  "09:30": 6,
  "10:00": 7,
  "10:30": 8,
  "11:00": 9,
  "11:30": 10,
  "12:00": 11,
  "12:30": 12,
  "13:00": 13,
  "13:30": 14,
  "14:00": 15,
  "14:30": 16,
  "15:00": 17,
  "15:30": 18,
  "16:00": 19,
  "16:30": 20,
  "17:30": 21,
  "18:00": 22,
  "18:30": 23,
  "19:00": 24,
  "19:30": 25,
  "20:00": 26,
  "20:30": 27,
  "21:00": 28,
  "21:30": 29,
  "22:00": 30,
};

// Each day conversion is converted into a number that represents
// the start column and end column of that day in the grid system.
const dayConversion = {
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

const convertTime = (time) => {
  return timeConversion[time];
};

const convertDay = (day) => {
  return dayConversion[day];
};

export { convertTime, convertDay };
