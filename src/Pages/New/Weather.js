import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { checkWeather } from "../../redux/currentWeatherSlice";
import { checkForecast } from "../../redux/forecastCheckSlice";
import {
  setLatAndLon,
  CURRENT_WEATHER_API_CONDITION,
  CURRENT_WEATHER_API_URL,
  FORECAST_API_URL,
  FORECAST_API_CONDITION,
  WEAHTER_API_KEY,
} from "../../services/WeatherAPI";
import { createCurrentWeatherObject } from "../../utils/utils";
import WeatherCard from "./CurrentWeather";
import ForecastCard from "./Forecast";

const Weather = () => {
  let currentWeatherObject;
  let forecastObject;

  const dispatch = useDispatch();

  const currentWeatherState = useSelector(
    (state) => state.weather.weather,
    shallowEqual
  );
  const forecastState = useSelector(
    (state) => state.forecast.forecast,
    shallowEqual
  );
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

    // currentWeatherObject = createCurrentWeatherObject(currentWeatherResponse);
    // The weather related 2 objects below are temporary data
    // as API requests are blocked at the moment
    currentWeatherObject = {
      name: "ss",
      countryCode: "ss",
      currentTemp: "38",
      feelsLike: "37",
      description: "asd",
      main: "asd",
      icon: "s",
    };
    // forecastObject = createForecastObject(forecastResponse);
    forecastObject = {
      name: "ss",
      countryCode: "ss",
      currentTemp: "38",
      feelsLike: "37",
      description: "asd",
      main: "asd",
      icon: "s",
    };

    dispatch(checkWeather(currentWeatherObject));
    dispatch(checkForecast(forecastObject));
  });

  return (
    <div className="weather-container">
      {currentWeatherState ? (
        <p> Current weather is loaded</p>
      ) : (
        // <WeatherCard props={currentWeatherState} />
        <p> Loading current weather... </p>
      )}
      {forecastState ? (
        <p> Forecast is loaded</p>
      ) : (
        // <ForecastCard props={forecastState} />
        <p> Loading forecast... </p>
      )}
    </div>
  );
};
export default Weather;
