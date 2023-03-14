import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkWeather } from "../../redux/currentWeatherSlice";
import store from "../../redux/store";
import {
  setLatAndLon,
  CURRENT_WEATHER_API_CONDITION,
  CURRENT_WEATHER_API_URL,
  FORECAST_API_URL,
  FORECAST_API_CONDITION,
  WEAHTER_API_KEY,
} from "../../services/WeatherAPI";
import { roundTemp } from "../../utils/utils";
import WeatherCard from "./CurrentWeather";

const createCurrentObjectDetails = (currentWeatherInfo) => {
  const currentWeatherObject = {
    name: currentWeatherInfo.name,
    countryCode: currentWeatherInfo.sys.country,
    currentTemp: roundTemp(currentWeatherInfo.main.temp),
    feelsLike: roundTemp(currentWeatherInfo.main.feels_like),
    description: currentWeatherInfo.weather[0].description,
    main: currentWeatherInfo.weather[0].main,
    icon: currentWeatherInfo.weather[0].icon,
  };

  return currentWeatherObject;
};

const Weather = () => {
  const dispatch = useDispatch();
  const currentWeatherState = useSelector((state) => state.weather.weather);

  let currentWeatherObject;

  const location = useSelector((state) => state.locator.location);
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

    // currentWeatherObject = createCurrentObjectDetails(currentWeatherResponse);
    currentWeatherObject = {
      name: "ss",
      countryCode: "ss",
      currentTemp: "38",
      feelsLike: "37",
      description: "asd",
      main: "asd",
      icon: "s",
    };

    dispatch(checkWeather(currentWeatherObject));
  });

  return (
    <div className="weather-container">
      {currentWeatherState ? (
        <WeatherCard props={currentWeatherState} />
      ) : (
        <p> State is not loaded</p>
      )}
    </div>
  );
};
export default Weather;
