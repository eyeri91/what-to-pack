import React from "react";
import WeatherDisplay from "./Weather";
import Title from "./Title";

function New() {
  return (
    <div className="new-list">
      <WeatherDisplay />
      <Title />
    </div>
  );
}

export default New;
