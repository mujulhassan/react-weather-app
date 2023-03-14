import { useState } from "react";
  import WeatherForecast from "./WeatherForecast";
  
  export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");
  
    const getWeatherInfo = async () => {
      try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${process.env.REACT_APP_OPEN_WEATHER_KEY}`;
  
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
  
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
        <WeatherForecast />
      </>
    );
  }