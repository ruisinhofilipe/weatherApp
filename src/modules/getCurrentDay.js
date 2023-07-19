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
  const options = { month: "short", day: "numeric", year: "numeric" };

  const date = new Date(input);

  const extractedDate = date.toLocaleDateString("en-US", options);

  const day = WEEK_DAYS[date.getDay()];

  return `${day} - ${extractedDate}`;
};

export default getCurrentDay;
