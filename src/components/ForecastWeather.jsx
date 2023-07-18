import { useEffect, useRef, useState } from "react";
import { weatherApiKey } from "./apikey";
import axios from "axios";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

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
    <section>
      {list.map((item, index) => {
        return (
          <article key={index}>
            <p>{item.dt}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Forecast;

//   const isInitialLoad = useRef(true);

//   const dayInAWeek = new Date().getDay();
//   const hours = dayInAWeek.getHours();

///// Stop for console in double
// if (isInitialLoad.current) {
//   isInitialLoad.current = false;
//   return;
// }
