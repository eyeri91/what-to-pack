import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { checkWeather } from "../../redux/currentWeatherSlice";
import { checkForecast } from "../../redux/forecastCheckSlice";
import { setLatAndLon, fetchWeather } from "../../services/WeatherAPI";
import {
  createCurrentWeatherObject,
  createForecastObject,
} from "../../utils/utils";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";

let latAndLon;

const Weather = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locator.location);
  latAndLon = setLatAndLon(location.lat, location.lon);

  console.log("render");

  useEffect(() => {
    let currentWeatherObject, forecastObject;

    const fetchWeatherData = async () =>
      await fetchWeather(latAndLon).then(async (res) => {
        const WeatherResponse = await res.json();
        // console.log(WeatherResponse);

        [currentWeatherObject, forecastObject] =
          createCurrentWeatherObject(WeatherResponse);

        dispatch(checkWeather(currentWeatherObject));
        dispatch(checkForecast(forecastObject));
      });

    fetchWeatherData();
  }, [dispatch]);

  const currentWeatherState = useSelector(
    (state) => state.weather.weather,
    shallowEqual
  );

  const forecastState = useSelector(
    (state) => state.forecast.forecast,
    shallowEqual
  );

  return (
    <div className="weather-container">
      {currentWeatherState ? (
        <WeatherCard props={currentWeatherState} />
      ) : (
        <p> Loading current weather... </p>
      )}
      {forecastState ? (
        // <p> Forecast is loaded</p>
        <ForecastCard props={forecastState} />
      ) : (
        <p> Loading forecast... </p>
      )}
    </div>
  );
};
export default Weather;
