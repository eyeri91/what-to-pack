import { useState } from "react";
import { useSelector } from "react-redux";

const WEAHTER_API_KEY = "c6c588d9f20d96f525cf99708e91edee";

const CURRENT_WEATHER_API_URL =
  "https://api.openweathermap.org/data/2.5/weather?";
const CURRENT_WEATHER_API_CONDITION = "&units=metric&appid=";

const FORECAST_API_URL = "https://api.openweathermap.org/data/2.5/forecast?";
const FORECAST_API_CONDITION = "&cnt=17&units=metric&appid=";

const setLatAndLon = (lat, lon) => {
  return `lat=${lat}&lon=${lon}`;
};

const fetchWeather = () => {
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
};
export default fetchWeather;
