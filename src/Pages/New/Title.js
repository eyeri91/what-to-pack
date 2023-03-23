import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const location = useSelector((state) => state.weather.weather);

  return <h1>{`${location.region ?? location.city} ${location.country}`}</h1>;
};
export default Title;
