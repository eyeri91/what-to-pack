import React from "react";
// import { useSelector } from "react-redux";

const Title = ({ props }) => {
  return <h1>{`${props.region || props.city}, ${props.country}`}</h1>;
};
export default Title;
