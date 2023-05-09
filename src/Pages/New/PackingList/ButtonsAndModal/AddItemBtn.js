import React from "react";
import { AddItemModal } from "./AddItemModal";

export const AddItemBtn = (props) => {
  console.log(props);
  return (
    <>
      <AddItemModal id={props.category + props.id} category={props.category} />
      <button
        type="button"
        className="reset-btn add-item-btn"
        data-bs-toggle="modal"
        data-bs-target={`#${props.category + props.id}`}
        id={props.id}
      >
        +
      </button>
    </>
  );
};
