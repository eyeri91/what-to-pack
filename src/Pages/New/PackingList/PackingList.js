import React from "react";
import ListContainer from "./ListContainer";

const PackingList = (props) => {
  const listState = props.listState;
  return (
    <div className="packing-list-container packing-list mt-5 mt-md-5 align-self-md-start">
      <h3 className="packing-list_heading heading">What to pack</h3>
      <ListContainer listState={listState} />
    </div>
  );
};

export default PackingList;
