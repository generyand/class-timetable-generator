const subjects = [
  "GE 1",
  "GPE 1",
  "GPE 2",
  "GPE 3",
  "GPE 4",
  "GE 2",
  "GE 5",
  "NSTP 1",
  "NSTP 2",
  "GE 6",
  "UGE 1",
  "GE 15",
  "GE 4",
  "GE 20",
  "GE 3",
  "GE 8",
  "GE 9",
  "GE 11",
  "GE 7",
  "UGE 2",
  "CAED 500C",
];

const getRandomCourse = () => {
  return subjects[Math.floor(Math.random() * subjects.length)];
}

export default getRandomCourse;
