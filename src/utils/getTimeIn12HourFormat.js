/* GET TIME IN 12 HOUR FORMAT */
/* THIS IS JUST FOR THE LABELING */

// Converts a time in 24 hour format to 12 hour format.
// Since the input is 24 hour format, we can just add 7 to the time
// because we started at 7AM. Then we can use the modulo operator
// to get the time in 12 hour format.
const getTimeIn12HourFormat = (index) => {
  const time = index + 7;

  if (time > 11) {
    const pmTime = time % 12;
    return pmTime === 0 ? "12PM" : `${pmTime}PM`;
  }
  return time + "AM";
};

export { getTimeIn12HourFormat };
