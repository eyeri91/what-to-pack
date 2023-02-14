import React from "react";
import { useSelector } from "react-redux";

const CurrentWeather = () => {
  const currentWeatherState = useSelector((state) => state.currentWeather);
  console.log(currentWeatherState);
  return <h1>Current weather</h1>;
};

export default CurrentWeather;
