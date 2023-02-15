import React from "react";
import { useSelector } from "react-redux";

const Title = () => {
  const location = useSelector((state) => state.locator.location);

  return <h1>Title</h1>;
};
export default Title;
