import React, { useEffect } from "react";
import basicList from "./PackingList/basicList";
import Weather from "./WeatherComponents/Weather";
import { useSelector, useDispatch } from "react-redux";
import { updatePackingList } from "../../redux/packingListSlice";
import { PackingListContainer } from "./PackingList/PackingListContainer";

function New() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePackingList(basicList));
  }, [dispatch]);
  const locationState = useSelector((state) => state.locator.location);
  const weatherState = useSelector((state) => state.weather.weather);
  const listState = useSelector((state) => state.packingList.packingList);

  return (
    <div className="new-list d-flex flex-column justify-content-center align-items-center align-items-md-start flex-md-row justify-content-md-evenly mx-sm-4">
      {locationState ? <Weather /> : <p> Weather is not available</p>}
      {weatherState && <PackingListContainer listState={listState} />}
    </div>
  );
}

export default New;
