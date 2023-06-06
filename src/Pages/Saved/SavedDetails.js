import React from "react";
import WeatherCard from "../New/WeatherComponents/WeatherCard";
import ForecastCard from "../New/WeatherComponents/ForecastCard";
import GlowingPlaceholder from "../New/WeatherComponents/GlowingPlaceholder";
import PackingList from "../New/PackingList/PackingList";
import { useParams } from "react-router-dom";

export const SavedDetails = () => {
  const { tripKey } = useParams();
  const foundTripsObject = JSON.parse(localStorage.getItem(tripKey));
  const weatherState = foundTripsObject[0];
  weatherState.isItToday = false;
  const forecastState = foundTripsObject[1];
  const listState = foundTripsObject[2];

  return (
    <div className="container saved-details d-flex flex-column justify-content-center align-items-center align-items-md-start flex-md-row justify-content-md-evenly">
      <div
        className="weather-container  accordion accordion-flush mt-5"
        id="weatherAccordion"
      >
        <h3 className="weather-container_heading heading">Weather</h3>
        {weatherState ? (
          <WeatherCard props={weatherState} key={weatherState.id} />
        ) : (
          GlowingPlaceholder
        )}
        {forecastState ? (
          forecastState.map((day) => <ForecastCard props={day} key={day.id} />)
        ) : (
          <></>
        )}
      </div>
      <PackingList listState={listState} />
    </div>
  );
};
