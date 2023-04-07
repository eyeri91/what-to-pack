import React from "react";
// import Title from "./Title";
import Weather from "./Weather";
import { useSelector } from "react-redux";
import PackingList from "./PackingList";

function New() {
  const locationState = useSelector((state) => state.locator.location);
  const weatherState = useSelector((state) => state.weather.weather);

  return (
    <div className="new-list d-flex flex-column justify-content-center align-items-center flex-md-row justify-content-md-evenly">
      {locationState ? <Weather /> : <p> Weather is not available</p>}
      {weatherState && <PackingList />}
    </div>
  );
}

export default New;
