import checkIfExistsAndReturnCountry from "../modules/countriesList";
import getCurrentDay from "../modules/getCurrentDay";
import convertValueIntoHours from "../modules/convertIntoHours";

const DisplayCurrentWeather = ({ weatherData }) => {
  const information = {
    name: weatherData.name,
    timezone: weatherData.timezone,
    maxTemperature: Math.round(weatherData.main.temp_max),
    minTemperature: Math.round(weatherData.main.temp_min),
    temperature: Math.round(weatherData.main.temp),
    feelsLike: Math.round(weatherData.main.feels_like),
    humidity: weatherData.main.humidity,
    pressure: weatherData.main.pressure,
    sunrise: convertValueIntoHours(
      weatherData.sys.sunrise,
      weatherData.timezone
    ),
    sunset: convertValueIntoHours(weatherData.sys.sunset, weatherData.timezone),
    icon: weatherData.weather[0].icon,
    description: weatherData.weather[0].main,
    smallDescription: weatherData.weather[0].description,
    wind: weatherData.wind.speed,
    country: checkIfExistsAndReturnCountry(weatherData.sys.country),
    date: getCurrentDay(new Date()),
  };

  return (
    <article className="currentWeatherContainer">
      <section className="currentWeather-title">
        <h1>
          {information.name}, {information.country}
        </h1>
        <p>{information.date}</p>
      </section>
      <article className="currentWeather-info">
        <section className="currentWeatherDisplay-left">
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
          <div className="feelsLike">
            <p className="p-lighter">{"Feels like"}</p>
            <p className="p-darker">{`${information.feelsLike}°C`}</p>
          </div>
          <div className="pressure">
            <p className="p-lighter">{"Pressure"}</p>
            <p className="p-darker">{information.pressure}</p>
          </div>
          <div className="sunRise">
            <p className="p-lighter">{"Sunrise"}</p>
            <p className="p-darker">{information.sunrise}</p>
          </div>
          <div className="sunSet">
            <p className="p-lighter">{"Sunset"}</p>
            <p className="p-darker">{information.sunset}</p>
          </div>
          <div className="minTemp">
            <p className="p-lighter">{"Min"}</p>
            <p className="p-darker">{`${information.minTemperature}°C`}</p>
          </div>
          <div className="maxTemp">
            <p className="p-lighter">{"Max"}</p>
            <p className="p-darker">{`${information.maxTemperature}°C`}</p>
          </div>
          <div className="wind">
            <p className="p-lighter">{"Wind"}</p>
            <p className="p-darker">{`${information.wind} Km/h`}</p>
          </div>
          <div className="humidity">
            <p className="p-lighter">{"Humidity"}</p>
            <p className="p-darker">{`${information.humidity} %`}</p>
          </div>
        </section>
      </article>
    </article>
  );
};

export default DisplayCurrentWeather;
