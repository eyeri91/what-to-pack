import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { checkWeather } from "../../../redux/currentWeatherSlice";
import { checkForecast } from "../../../redux/forecastCheckSlice";
import { setLatAndLon, fetchWeather } from "../../../services/WeatherAPI";
import {
  createWeatherObjects,
  handleFetchWeatherError,
} from "../../../utils/utils";

import { GlowingPlaceholder } from "./GlowingPlaceholder";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";

let latAndLon;

const Weather = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locator.location);
  latAndLon = setLatAndLon(location.lat, location.lon);

  useEffect(() => {
    let currentWeatherObject, forecastObjectsArray;

    const fetchWeatherData = async () =>
      await fetchWeather(latAndLon)
        .then(async (res) => {
          const WeatherResponse = await res.json();
          [currentWeatherObject, forecastObjectsArray] =
            createWeatherObjects(WeatherResponse);

          dispatch(checkWeather(currentWeatherObject));
          dispatch(checkForecast(forecastObjectsArray));
        })
        .catch(handleFetchWeatherError);

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
    <div
      className="weather-container  accordion accordion-flush mt-5"
      id="weatherAccordion"
    >
      <h3 className="weather-container_heading heading">Weather</h3>
      {currentWeatherState ? (
        <WeatherCard props={currentWeatherState} key={currentWeatherState.id} />
      ) : (
        GlowingPlaceholder
      )}
      {forecastState ? (
        forecastState.map((day) => <ForecastCard props={day} key={day.id} />)
      ) : (
        <></>
      )}
    </div>
  );
};
export default Weather;
