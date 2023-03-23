import React from "react";

const ForecastCard = ({ props }) => {
  return (
    <div className="forecast-card">
      <p>Date: {props.date}</p>
      <h1>
        Min temp: {props.minTemp} / Max temp: {props.maxTemp}{" "}
      </h1>
      <p>{props.description} </p>
      <p>{props.icon} </p>
    </div>
  );
};

export default ForecastCard;
