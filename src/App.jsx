import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header.jsx";
import DisplayCurrentWeather from "./components/CurrentWeather.jsx";
import { weatherApiKey, unsplashApiKey } from "./components/apikey.js";
import BackgroundImgContainer from "./components/BackgroundImg";

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [urlImg, setUrlImg] = useState(null);

  const inputRef = useRef();

  const changeLocationValue = () => {
    const newLocation = inputRef.current.value;
    setLocation(newLocation);
  };

  const fetchData = async () => {
    // Get weather data from the location
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}`
      );
      const data = await response.data;
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }

    // Get a photo from the location
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${location}&client_id=${unsplashApiKey}`
      );
      const data = await response.data;
      setUrlImg(data.results[0].urls.full);
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
      {urlImg !== null ? <BackgroundImgContainer photoUrl={urlImg} /> : null}

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
