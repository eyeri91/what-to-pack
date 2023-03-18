import React from "react";
import DefaultList from "./List examples/DefaultList";

const PackingList = () => {
  return (
    <div className="packing-list-container">
      <h1>Things to pack</h1>
      <DefaultList />
    </div>
  );
};

export default PackingList;
