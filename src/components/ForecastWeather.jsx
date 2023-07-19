import { useEffect, useRef, useState } from "react";
import { weatherApiKey } from "../modules/apikey";
import axios from "axios";
import getCurrentDay from "../modules/getCurrentDay";

const Forecast = ({ latAndLon }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchDataForecast = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latAndLon.lat}&lon=${latAndLon.lon}&appid=${weatherApiKey}&units=metric`
        );

        const data = await response.data;

        const forecastFiveDays = data.list.filter((item) =>
          item.dt_txt.includes("12:00:00")
        );
        setList(forecastFiveDays);
        console.log(forecastFiveDays);
      } catch (error) {
        console.log(error);
      }
    };

    if (latAndLon && latAndLon.lat && latAndLon.lon) {
      fetchDataForecast();
    }
  }, [latAndLon]);

  return (
    <section className="forecast-days-container">
      {list.map((item, index) => {
        return (
          <article className="forecast-days-display" key={index}>
            <section className="forecast-info">
              <p>{getCurrentDay(item.dt_txt)}</p>
              <p>
                {item.weather[0].main} - {`${item.main.temp}°C`}
              </p>
            </section>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{`Feels like: ${item.main.feels_like}°C`}</p>
            <section className="high-low-temperatures">
              <p>{`H: ${item.main.temp_max}°C`}</p>
              <p>{`L: ${item.main.temp_min}°C`}</p>
            </section>
          </article>
        );
      })}
    </section>
  );
};

export default Forecast;
