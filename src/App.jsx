import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import DisplayCurrentWeather from "./components/CurrentWeather";

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);

  const inputRef = useRef();

  const changeLocationValue = () => {
    const newLocation = inputRef.current.value;
    setLocation(newLocation);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=93c2204fb4e52ffc4acebdfafdedef39`
      );
      const data = await response.data;
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location !== null) {
      fetchData();
    }
  }, [location]);

  return (
    <React.StrictMode>
      <Header inputRef={inputRef} changeLocationValue={changeLocationValue} />
      <main>
        {weatherData !== null ? (
          <DisplayCurrentWeather weatherData={weatherData} />
        ) : null}
      </main>
    </React.StrictMode>
  );
}

export default App;
