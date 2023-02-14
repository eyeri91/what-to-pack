import React from "react";
import Title from "./Title";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

function New() {
  return (
    <div className="new-list">
      <Title />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default New;
