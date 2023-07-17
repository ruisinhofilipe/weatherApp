const convertTemperature = (temp) => {
  const temperature = Math.ceil(temp - 273.15);
  return temperature;
};

const convertWind = (wind) => {
  const windVelocity = Math.ceil(wind * 3.6);
  return windVelocity;
};

export { convertTemperature, convertWind };
