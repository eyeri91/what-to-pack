import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";

import WeatherCard from "../New/WeatherComponents/WeatherCard";
import ForecastCard from "../New/WeatherComponents/ForecastCard";
import GlowingPlaceholder from "../New/WeatherComponents/GlowingPlaceholder";
import { AddCategoryBtn } from "../New/PackingList/ButtonsAndModal/AddCategoryBtn";
import { DeleteCategoryBtn } from "../New/PackingList/ButtonsAndModal/DeleteCategoryBtn";
import { SaveCurrentListBtn } from "../New/PackingList/ButtonsAndModal/SaveCurrentListBtn";
import { DeleteTripBtn } from "./SavedTripsButtonsAndModal/DeleteTripBtn";
import CategoryContainer from "../New/PackingList/CategoryContainer";
import { checkWeather } from "../../redux/currentWeatherSlice";
import { checkForecast } from "../../redux/forecastCheckSlice";

export const SavedDetails = () => {
  const dispatch = useDispatch();
  const { tripKey } = useParams();
  let categories = [];
  const isItSavedTrip = true;

  const foundTripsObject = JSON.parse(localStorage.getItem(tripKey));
  const weatherState = foundTripsObject[0];
  weatherState.isItToday = false;
  const forecastState = foundTripsObject[1];
  const [foundTripListState, setFoundTripListState] = useState(
    foundTripsObject[2]
  );
  useEffect(() => {
    dispatch(checkWeather(weatherState));
    dispatch(checkForecast(forecastState));
  }, [dispatch, weatherState, forecastState]);

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

      <div className="packing-list-container packing-list mt-5 mt-md-5 align-self-md-start">
        <h3 className="packing-list_heading heading">What to pack</h3>
        <div className="category-container d-flex flex-column">
          {foundTripListState.map((listCategory) => {
            let isItFirstCategory = false;

            for (const [category, items] of Object.entries(listCategory)) {
              categories.push(category);
              const addBtnId = uuidv4();

              return (
                <CategoryContainer
                  isItSavedTrip={isItSavedTrip}
                  isItFirstCategory={isItFirstCategory}
                  category={category}
                  items={items}
                  addBtnId={addBtnId}
                />
              );
            }

            return false;
          })}
          <div className="category-btns d-flex justify-content-evenly ">
            <AddCategoryBtn
              tripKey={tripKey}
              setFoundTripListState={setFoundTripListState}
            />
            <DeleteCategoryBtn
              tripKey={tripKey}
              setFoundTripListState={setFoundTripListState}
              categories={categories}
            />
          </div>
        </div>
        <div className="save-list-btn-container d-flex justify-content-center mt-5 mb-4 ">
          {isItSavedTrip ? (
            <>
              <DeleteTripBtn tripKey={tripKey} />
              <SaveCurrentListBtn
                tripKey={tripKey}
                isItSavedTrip={isItSavedTrip}
              />
            </>
          ) : (
            <SaveCurrentListBtn />
          )}
        </div>
      </div>
    </div>
  );
};
