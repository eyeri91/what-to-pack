import React from "react";

// import { useSelector } from "react-redux";

const WeatherCard = ({ props }) => {
  return (
    <div className="weather-card">
      <h1>{`${props.city} ${props.country}`}</h1>
      <h3>Current Temperature: {props.currentTemp}</h3>
      <h3>Feels like: {props.feelsLike}</h3>
      <p>
        Description: {props.description}, Icon: {props.icon}
      </p>
    </div>
  );
};

export default WeatherCard;
