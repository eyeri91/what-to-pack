import React from "react";
import WeatherCard from "../New/WeatherComponents/WeatherCard";
import ForecastCard from "../New/WeatherComponents/ForecastCard";
import GlowingPlaceholder from "../New/WeatherComponents/GlowingPlaceholder";
import { v4 as uuidv4 } from "uuid";
import { AddCategoryBtn } from "../New/PackingList/ButtonsAndModal/AddCategoryBtn";
import { DeleteCategoryBtn } from "../New/PackingList/ButtonsAndModal/DeleteCategoryBtn";
import { SaveCurrentListBtn } from "../New/PackingList/ButtonsAndModal/SaveCurrentListBtn";

import CategoryContainer from "../New/PackingList/CategoryContainer";
import { useParams } from "react-router-dom";

export const SavedDetails = () => {
  const { tripKey } = useParams();
  const foundTripsObject = JSON.parse(localStorage.getItem(tripKey));
  const weatherState = foundTripsObject[0];
  weatherState.isItToday = false;
  const forecastState = foundTripsObject[1];
  const listState = foundTripsObject[2];
  let categories = [];

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
          {listState.map((listCategory) => {
            let isItFirstCategory = false;

            for (const [category, items] of Object.entries(listCategory)) {
              categories.push(category);
              const addBtnId = uuidv4();
              return (
                <CategoryContainer
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
            <AddCategoryBtn />
            <DeleteCategoryBtn categories={categories} />
          </div>
        </div>
        <div className="save-list-btn-container d-flex justify-content-center mt-5 mb-4 ">
          <SaveCurrentListBtn />
        </div>
      </div>
    </div>
  );
};
