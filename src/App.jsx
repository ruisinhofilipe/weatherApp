import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header.jsx";
import DisplayCurrentWeather from "./components/CurrentWeather.jsx";
import { weatherApiKey, unsplashApiKey } from "./components/apikey.js";
import BackgroundImgContainer from "./components/BackgroundImg";
import Forecast from "./components/ForecastWeather";

function App() {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [urlImg, setUrlImg] = useState(null);
  const [latAndLon, setLatAndLon] = useState(null);
  const inputRef = useRef();

  // Function being passed as a prop that changes the location according to the input value + user click
  const changeLocationValue = () => {
    const newLocation = inputRef.current.value;
    setLocation(newLocation);
  };

  const fetchData = async () => {
    // Get a photo from the location
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${location}&client_id=${unsplashApiKey}`
      );
      const data = await response.data;
      setUrlImg(data.results[1].urls.full);
    } catch (error) {
      console.log(error);
    }

    // Get current weather data from the location
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherApiKey}&units=metric`
      );
      const data = await response.data;
      setWeatherData(data);
      setLatAndLon({ lat: data.coord.lat, lon: data.coord.lon });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (location) {
      fetchData();
    }
  }, [location]);

  return (
    <React.StrictMode>
      {urlImg && <BackgroundImgContainer photoUrl={urlImg} />}

      <Header inputRef={inputRef} changeLocationValue={changeLocationValue} />

      <main>
        {weatherData && <DisplayCurrentWeather weatherData={weatherData} />}
        {latAndLon && <Forecast latAndLon={latAndLon} />}
      </main>
    </React.StrictMode>
  );
}

export default App;
