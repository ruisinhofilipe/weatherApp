import { convertTemperature, convertWind } from "./convertMeasures.js";

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
    humidity: weatherData.main.humidity,
  };

  return (
    <section className="currentWeatherContainer">
      <article className="currentWeatherDisplay-left">
        <h1>{information.name}</h1>
        <p>{information.description}</p>
        <div className="icon-temp">
          <img
            src={`http://openweathermap.org/img/wn/${information.icon}@2x.png`}
            alt=""
          />
          <p>{`${convertTemperature(information.temperature)}°C`}</p>
        </div>
      </article>
      <article className="currentWeatherDisplay-right">
        <p>{`Feels like: ${convertTemperature(information.feelsLike)}°C`}</p>
        <p>{`H: ${convertTemperature(information.maxTemperature)}°C`}</p>
        <p>{`L: ${convertTemperature(information.minTemperature)}°C`}</p>
        <p>{`Wind: ${convertWind(information.wind)} Km/h`}</p>
        <p>{`Humidity: ${information.humidity} %`}</p>
      </article>
    </section>
  );
};

export default DisplayCurrentWeather;
