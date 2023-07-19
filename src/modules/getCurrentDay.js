const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getCurrentDay = (input) => {
  const date = new Date(input);

  const day = WEEK_DAYS[date.getDay()];

  return day;
};

export default getCurrentDay;
