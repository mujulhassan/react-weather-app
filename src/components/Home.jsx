// src/components/Home
  
import { useState, useEffect } from "react";
import WeatherForecast from "./WeatherForecast";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);


  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}&units=metric`;

      let res = await fetch(url);
      let data = await res.json();

      const { main, name, sys, weather, wind } = data;

      const newWeatherInfo = {
        humidity: main.humidity,
        location: `${name}, ${sys.country}`,
        pressure: main.pressure,
        sunset: sys.sunset,
        temperature: main.temp,
        weatherIcon: weather[0].icon,
        weatherType: weather[0].main,
        windSpeed: wind.speed,
      };

      setWeatherInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo()
  },[searchTerm])

  return (
    <>
      <form role="search">
        <input
          type="search"
          aria-label="Search for a city"
          placeholder="London"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={() => getWeatherInfo()} type="button">
          Search
        </button>
      </form>
      {weatherInfo && <WeatherForecast {...weatherInfo} />}
    </>
  );
}