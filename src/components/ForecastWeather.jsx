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
    <section className="forecast-days-container">
      {list.map((item, index) => {
        return (
          <article className="forecast-days-display" key={index}>
            <p>{getCurrentDay(item.dt_txt)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt=""
            />
            <p>{item.main.temp_max}</p>
            <p>{item.main.temp_min}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Forecast;

//   const isInitialLoad = useRef(true);

///// Stop for console in double
// if (isInitialLoad.current) {
//   isInitialLoad.current = false;
//   return;
// }
