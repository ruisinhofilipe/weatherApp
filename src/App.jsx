import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { weatherApiKey, unsplashApiKey } from "./modules/apikey.js";
import Header from "./components/Header.jsx";
import DisplayCurrentWeather from "./components/CurrentWeather.jsx";
import Footer from "./components/Footer.jsx";

import BackgroundImgContainer from "./components/BackgroundImg";
import Forecast from "./components/ForecastWeather";

function App() {
  const [location, setLocation] = useState("Porto");
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

      setUrlImg(data.results[1].urls.raw);
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
      <Header inputRef={inputRef} changeLocationValue={changeLocationValue} />
      <main>
        {urlImg && <BackgroundImgContainer photoUrl={urlImg} />}
        <section className="container-weather">
          {weatherData && <DisplayCurrentWeather weatherData={weatherData} />}
          {latAndLon && <Forecast latAndLon={latAndLon} />}
        </section>
      </main>
      <Footer></Footer>
    </React.StrictMode>
  );
}

export default App;
