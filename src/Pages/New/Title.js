import React from "react";
// import { useSelector } from "react-redux";

const Title = ({ props }) => {
  return (
    <div className="title text-center">
      <img src={props.icon} className="weather-icon" alt="weather-icon" />
      <h1 className="title-city display-5">{`${
        props.region || props.city
      }`}</h1>
      <h1 className="title-temperature display-1">
        {props.currentTemp}
        <span className="fw-lighter">°</span>
      </h1>
      <h6 className="title-country text-center fw-light">{` ${props.country}`}</h6>
    </div>
  );
};
export default Title;
