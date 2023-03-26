import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { checkWeather } from "../../redux/currentWeatherSlice";
import { checkForecast } from "../../redux/forecastCheckSlice";
import { setLatAndLon, fetchWeather } from "../../services/WeatherAPI";
import { createWeatherObjects } from "../../utils/utils";
import Title from "./Title";
import WeatherCard from "./WeatherCard";
import ForecastCard from "./ForecastCard";

let latAndLon;

const Weather = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locator.location);
  latAndLon = setLatAndLon(location.lat, location.lon);

  console.log("render");

  useEffect(() => {
    let currentWeatherObject, forecastObjectsArray;

    const fetchWeatherData = async () =>
      await fetchWeather(latAndLon).then(async (res) => {
        const WeatherResponse = await res.json();

        [currentWeatherObject, forecastObjectsArray] =
          createWeatherObjects(WeatherResponse);

        dispatch(checkWeather(currentWeatherObject));
        dispatch(checkForecast(forecastObjectsArray));
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
    <div
      className="weather-container accordion accordion-flush"
      id="weatherAccordion"
    >
      <Title props={currentWeatherState} />
      {currentWeatherState ? (
        <WeatherCard props={currentWeatherState} />
      ) : (
        <p> Loading current weather... </p>
      )}
      {forecastState ? (
        forecastState.map((day) => <ForecastCard props={day} />)
      ) : (
        // <ForecastCard props={forecastState} />
        <p> Loading forecast... </p>
      )}
    </div>
  );
};
export default Weather;
