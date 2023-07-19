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
    description: weatherData.weather[0].main,
    wind: weatherData.wind.speed,
  };

  return (
    <section className="currentWeatherContainer">
      <article className="currentWeatherDisplay">
        <section className="currentWeatherDisplay-left">
          <h1>{information.name}</h1>
          <p>{information.description}</p>
          <div className="icon-temp">
            <img
              src={`http://openweathermap.org/img/wn/${information.icon}@2x.png`}
              alt=""
            />
            <p>{`${information.temperature}°C`}</p>
          </div>
        </section>
        <section className="currentWeatherDisplay-right">
          <p>{`Feels like: ${information.feelsLike}°C`}</p>
          <p>{`H: ${information.maxTemperature}°C`}</p>
          <p>{`L: ${information.minTemperature}°C`}</p>
          <p>{`Wind: ${information.wind} Km/h`}</p>
          <p>{`Humidity: ${information.humidity} %`}</p>
        </section>
      </article>
    </section>
  );
};

export default DisplayCurrentWeather;
