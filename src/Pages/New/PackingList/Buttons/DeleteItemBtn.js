import React from "react";
import { ListModal } from "../ListModal";

export const DeleteItemBtn = (props) => {
  return (
    <>
      <ListModal
        item={props.item}
        category={props.category}
        id={props.category + props.id}
      />
      <button
        type="button"
        className="reset-btn delete-item-btn"
        data-bs-toggle="modal"
        data-bs-target={`#${props.category + props.id}`}
        id={props.id}
      >
        -
      </button>
    </>
  );
};
