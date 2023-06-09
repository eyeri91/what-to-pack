import React from "react";
import ListContainer from "./PackingList";
import { SaveCurrentListBtn } from "./ButtonsAndModal/SaveCurrentListBtn";

export const PackingListContainer = (props) => {
  const listState = props.listState;
  return (
    <div className="packing-list-container packing-list mt-5 mt-md-5 align-self-md-start">
      <h3 className="packing-list_heading heading">What to pack</h3>
      <ListContainer listState={listState} />
      <div className="save-list-btn-container d-flex justify-content-center mt-5 mb-4 ">
        <SaveCurrentListBtn />
      </div>
    </div>
  );
};

export default PackingListContainer;
