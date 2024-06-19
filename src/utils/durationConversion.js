const timeConversion = {
  "07:00": 1,
  "08:00": 2,
  "09:00": 3,
  "10:00": 4,
  "11:00": 5,
  "12:00": 6,
  "13:00": 7,
  "14:00": 8,
  "15:00": 9,
  "16:00": 10,
  "17:00": 11,
  "18:00": 12,
  "19:00": 13,
  "20:00": 14,
  "21:00": 15,
};

const dayConversion = {
  "mon": 1,
  "tue": 2,
  "wed": 3,
  "thu": 4,
  "fri": 5,
  "sat": 6,
};

const convertTime = (time) => {
  return timeConversion[time];
};

const convertDay = (day) => {
  return dayConversion[day];
};

export { convertTime, convertDay };
