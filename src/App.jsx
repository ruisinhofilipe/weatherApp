import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import DisplayCurrentWeather from "./components/CurrentWeather";

function App() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const inputRef = useRef();

  const displayInformation = () => {
    const newLocation = inputRef.current.value;
    setLocation(newLocation);
  };

  const convertTemperature = (temp) => {
    const temperature = Math.round(temp - 273.15);
    return temperature;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=93c2204fb4e52ffc4acebdfafdedef39`
        );
        const data = await response.data;
        setWeatherData(data);
        console.log(data);
        // console.log(convertTemperature(data.main.temp));
      } catch (error) {
        console.log(error);
      }
    };

    if (location !== "") {
      fetchData();
    }
  }, [location]);

  return (
    <React.StrictMode>
      <Header inputRef={inputRef} displayInformation={displayInformation} />
      <DisplayCurrentWeather weatherData={weatherData}></DisplayCurrentWeather>
    </React.StrictMode>
  );
}

export default App;
