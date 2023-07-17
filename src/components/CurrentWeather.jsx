import countryList from "./countriesList.js";
import { useState } from "react";

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
    <section className="currentWeatherContainer">
      <article className="currentWeatherDisplay-left">
        <h1>{information.name}</h1>
        <div className="icon-temp">
          <img
            src={`http://openweathermap.org/img/wn/${information.icon}@2x.png`}
            alt=""
          />
          <p>{`${convertTemperature(information.temperature)}°C`}</p>
        </div>

        <p>{information.description}</p>
        <p>{`Feels like: ${convertTemperature(information.feelsLike)}°C`}</p>
      </article>
      <article className="currentWeatherDisplay-right">
        <p>{`H: ${convertTemperature(information.maxTemperature)}°C`}</p>
        <p>{`L: ${convertTemperature(information.minTemperature)}°C`}</p>
      </article>
    </section>
  );
};

export default DisplayCurrentWeather;
