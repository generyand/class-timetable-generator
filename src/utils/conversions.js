/* DURATION CONVERSION */

// Each time conversion is converted into a number that represents
// the start row and end row of that time in the grid system.
const timeConversion = {
  "07:00": 1,
  "07:10": 2,
  "07:20": 3,
  "07:30": 4,
  "07:40": 5,
  "07:50": 6,
  "08:00": 7,
  "08:10": 8,
  "08:20": 9,
  "08:30": 10,
  "08:40": 11,
  "08:50": 12,
  "09:00": 13,
  "09:10": 14,
  "09:20": 15,
  "09:30": 16,
  "09:40": 17,
  "09:50": 18,
  "10:00": 19,
  "10:10": 20,
  "10:20": 21,
  "10:30": 22,
  "10:40": 23,
  "10:50": 24,
  "11:00": 25,
  "11:10": 26,
  "11:20": 27,
  "11:30": 28,
  "11:40": 29,
  "11:50": 30,
  "12:00": 31,
  "12:10": 32,
  "12:20": 33,
  "12:30": 34,
  "12:40": 35,
  "12:50": 36,
  "13:00": 37,
  "13:10": 38,
  "13:20": 39,
  "13:30": 40,
  "13:40": 41,
  "13:50": 42,
  "14:00": 43,
  "14:10": 44,
  "14:20": 45,
  "14:30": 46,
  "14:40": 47,
  "14:50": 48,
  "15:00": 49,
  "15:10": 50,
  "15:20": 51,
  "15:30": 52,
  "15:40": 53,
  "15:50": 54,
  "16:00": 55,
  "16:10": 56,
  "16:20": 57,
  "16:30": 58,
  "16:40": 59,
  "16:50": 60,
  "17:00": 61,
  "17:10": 62,
  "17:20": 63,
  "17:30": 64,
  "17:40": 65,
  "17:50": 66,
  "18:00": 67,
  "18:10": 68,
  "18:20": 69,
  "18:30": 70,
  "18:40": 71,
  "18:50": 72,
  "19:00": 73,
  "19:10": 74,
  "19:20": 75,
  "19:30": 76,
  "19:40": 77,
  "19:50": 78,
  "20:00": 79,
  "20:10": 80,
  "20:20": 81,
  "20:30": 82,
  "20:40": 83,
  "20:50": 84,
  "21:00": 85,
  "21:10": 86,
  "21:20": 87,
  "21:30": 88,
  "21:40": 89,
  "21:50": 90,
  "22:00": 91,
};

const dayConversion = {
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
};

// Used for labeling in the timetable
const convertIndexToTime = (index) => {
  const time = index + 8;

  if (time > 11) {
    const pmTime = time % 12;
    return pmTime === 0 ? "12PM" : `${pmTime}PM`;
  }
  return time + "AM";
};

const convert12FormatTo24 = (time24) => {
  var ts = time24;
  var H = +ts.substr(0, 2);
  var h = H % 12 || 12;
  h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
  var ampm = H < 12 ? " AM" : " PM";
  ts = h + ts.substr(2, 3) + ampm;
  return ts;
};

const convertTimeToRow = (time) => {
  return timeConversion[time];
};

const convertDayToColumn = (day) => {
  return dayConversion[day];
};

export {
  convertTimeToRow,
  convertDayToColumn,
  convertIndexToTime,
  convert12FormatTo24,
};
