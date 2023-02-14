import React from "react";
import Title from "./Title";
import Weather from "./Weather";
import { useSelector } from "react-redux";

function New() {
  const location = useSelector((state) => state.location);
  return (
    <div className="new-list">
      <Title />
      {location ? <Weather /> : <p> Weather is not available</p>}
    </div>
  );
}

export default New;
