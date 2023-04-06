import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { checkWeather } from "../../redux/currentWeatherSlice";
import { checkForecast } from "../../redux/forecastCheckSlice";
import { setLatAndLon, fetchWeather } from "../../services/WeatherAPI";
import { createWeatherObjects } from "../../utils/utils";
// import Title from "./Title";
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

  // const forecastCard = forecastState.map((day) => <ForecastCard props={day} />);
  const titleAndWeatherCards = (
    <>
      {/* <Title props={currentWeatherState} /> */}
      <WeatherCard props={currentWeatherState} />
    </>
  );

  const glowingPlaceholder = (
    <div className="data-loading-card">
      <h5 className="card-title placeholder-glow text-center mb-3">
        <span className="placeholder col-8"></span>
      </h5>
      <span className="placeholder col-12 bg-secondary mb-2"></span>
      <span className="placeholder col-12 bg-secondary mb-2"></span>
      <span className="placeholder col-12 bg-secondary mb-2"></span>
    </div>
  );

  return (
    <div
      className="weather-container accordion accordion-flush mt-5 "
      id="weatherAccordion"
    >
      {currentWeatherState ? titleAndWeatherCards : glowingPlaceholder}
      {forecastState ? (
        forecastState.map((day) => <ForecastCard props={day} />)
      ) : (
        <></>
      )}
    </div>
  );
};
export default Weather;
