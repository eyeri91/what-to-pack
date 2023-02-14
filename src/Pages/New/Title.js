import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const location = useSelector((state) => state.location);
  return <h1>{location.city}</h1>;
};
export default Title;
