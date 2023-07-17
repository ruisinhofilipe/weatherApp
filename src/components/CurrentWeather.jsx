const DisplayCurrentWeather = ({ weatherData }) => {
  const information = {
    name: weatherData.name,
    timezone: weatherData.timezone,
    maxTemperature: weatherData.main.temp_max,
    minTemperature: weatherData.main.temp_min,
    temperature: weatherData.main.temp,
    feelsLike: weatherData.main.feels_like,
    humidity: weatherData.main.humidity,
    pressure: weatherData.main.pressure,
    sunrise: weatherData.sys.sunrise,
    sunset: weatherData.sys.sunset,
    visibility: weatherData.visibility,
    icon: weatherData.weather[0].icon,
    description: weatherData.weather[0].description,
    wind: weatherData.wind.speed,
  };

  const convertTemperature = (temp) => {
    const temperature = Math.ceil(temp - 273.15);
    return temperature;
  };

  return (
    <section>
      <h1>{information.name}</h1>
      <p>{convertTemperature(information.temperature)}</p>
    </section>
  );
};

export default DisplayCurrentWeather;
