import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { checkWeather } from "../../redux/currentWeatherSlice";
// import { checkForecast } from "../../redux/forecastCheckSlice";
import {
  setLatAndLon,
  currentWeatherFetch,
  forecastFetch,
} from "../../services/WeatherAPI";
import { createCurrentWeatherObject } from "../../utils/utils";
import WeatherCard from "./CurrentWeather";
// import ForecastCard from "./Forecast";

let latAndLon;

const Weather = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.locator.location);
  latAndLon = setLatAndLon(location.lat, location.lon);

  console.log("render");

  useEffect(() => {
    let currentWeatherObject;
    // let forecastObject;

    const fetchWeatherData = async () =>
      Promise.all([
        currentWeatherFetch(latAndLon),
        forecastFetch(latAndLon),
      ]).then(async (res) => {
        const currentWeatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();

        currentWeatherObject = createCurrentWeatherObject(
          currentWeatherResponse
        );

        // console.log(forecastResponse);

        dispatch(checkWeather(currentWeatherObject));
        // dispatch(checkForecast(forecastObject));
      });
    fetchWeatherData();
  }, [dispatch]);

  const currentWeatherState = useSelector(
    (state) => state.weather.weather,
    shallowEqual
  );

  // const forecastState = useSelector(
  //   (state) => state.forecast.forecast,
  //   shallowEqual
  // );

  return (
    <div className="weather-container">
      {currentWeatherState ? (
        // <p> Current weather is loaded</p>
        <WeatherCard props={currentWeatherState} />
      ) : (
        <p> Loading current weather... </p>
      )}
      {/* {forecastState ? (
        // <p> Forecast is loaded</p>
        <ForecastCard props={forecastState} />
      ) : (
        <p> Loading forecast... </p>
      )} */}
    </div>
  );
};
export default Weather;
