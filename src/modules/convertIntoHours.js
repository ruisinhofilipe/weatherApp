const convertValueIntoHours = (input, timeZone) => {
  const time = new Date((input - timeZone) * 1000);
  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return formattedTime;
};

export default convertValueIntoHours;
