import React from "react";
import { useSelector } from "react-redux";

const Forecast = () => {
  const forecastState = useSelector((state) => state.forecast);
  console.log(forecastState);
  return <h1>Forecast</h1>;
};

export default Forecast;
