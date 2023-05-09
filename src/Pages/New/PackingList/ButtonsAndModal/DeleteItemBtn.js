import React from "react";
import { DeleteItemModal } from "./DeleteItemModal";

export const DeleteItemBtn = (props) => {
  return (
    <>
      <DeleteItemModal
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
