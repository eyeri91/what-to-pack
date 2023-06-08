import React from "react";
import Weather from "./WeatherComponents/Weather";
import { useSelector } from "react-redux";
import PackingList from "./PackingList/PackingList";

function New() {
  const locationState = useSelector((state) => state.locator.location);
  const weatherState = useSelector((state) => state.weather.weather);
  const listState = useSelector((state) => state.packingList.packingList);

  return (
    <div className="new-list d-flex flex-column justify-content-center align-items-center align-items-md-start flex-md-row justify-content-md-evenly">
      {locationState ? <Weather /> : <p> Weather is not available</p>}
      {weatherState && <PackingList listState={listState} />}
    </div>
  );
}

export default New;
