import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  setLatAndLon,
  CURRENT_WEATHER_API_CONDITION,
  CURRENT_WEATHER_API_URL,
  FORECAST_API_URL,
  FORECAST_API_CONDITION,
  WEAHTER_API_KEY,
} from "../../services/WeatherAPI";

const WeatherDisplay = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const location = useSelector((state) => state.location);
  const latAndLon = setLatAndLon(location.lat, location.lon);
  const currentWeatherFetch = fetch(
    CURRENT_WEATHER_API_URL +
      latAndLon +
      CURRENT_WEATHER_API_CONDITION +
      WEAHTER_API_KEY
  );
  const forecastFetch = fetch(
    FORECAST_API_URL + latAndLon + FORECAST_API_CONDITION + WEAHTER_API_KEY
  );

  Promise.all([currentWeatherFetch, forecastFetch]).then(async (res) => {
    const currentWeatherResponse = await res[0].json();
    const forecastResponse = await res[1].json();

    console.log(currentWeatherResponse);
    console.log(forecastResponse);
  });

  return (
    <div className="weather-container">
      <p className="city"> </p>
      <p className="description"> </p>
      <img alt="weather" className="weather-icon" src="" />
    </div>
  );
};
export default WeatherDisplay;
