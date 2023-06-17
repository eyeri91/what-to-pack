import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkWeather } from "../../../redux/currentWeatherSlice";
import { checkForecast } from "../../../redux/forecastCheckSlice";
import { updatePackingList } from "../../../redux/packingListSlice";

export const SavedTripButton = (props) => {
  const dispatch = useDispatch();
  const foundTripObject = props.foundTripObject;
  const weatherState = foundTripObject[0];
  const forecastState = foundTripObject[1];
  const savedListState = foundTripObject[2];
  return (
    <Link to={`/saved/${props.tripKey}`}>
      <button
        onClick={() => {
          dispatch(checkWeather(weatherState));
          dispatch(checkForecast(forecastState));
          dispatch(updatePackingList(savedListState));
        }}
        type="button"
        className="btn btn-lg btn-light position-relative me-5 mb-5"
      >
        {props.city}
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
          {props.date}
        </span>
      </button>
    </Link>
  );
};
