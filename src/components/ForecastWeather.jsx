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
      } catch (error) {
        console.log(error);
      }
    };

    if (latAndLon && latAndLon.lat && latAndLon.lon) {
      fetchDataForecast();
    }
  }, [latAndLon]);

  return (
    <article className="forecast-days-container">
      <h1>Weekly forecast</h1>
      {list.map((item, index) => {
        return (
          <section className="forecast-days-display" key={index}>
            <p className="title-day">
              {getCurrentDay(item.dt_txt).split(" ")[0]}
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{`${Math.round(item.main.temp)}°C`}</p>
          </section>
        );
      })}
    </article>
  );
};

export default Forecast;
