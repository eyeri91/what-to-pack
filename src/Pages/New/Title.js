import React from "react";
// import { useSelector } from "react-redux";

const Title = ({ props }) => {
  return (
    <div className="title">
      <h1 className="title-city display-4 text-center">{`${
        props.region || props.city
      }`}</h1>
      <h6 className="title-country text-center">{` ${props.country}`}</h6>
    </div>
  );
};
export default Title;
