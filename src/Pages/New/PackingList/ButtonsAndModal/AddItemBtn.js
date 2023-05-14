import React from "react";
import { AddItemModal } from "./AddItemModal";

export const AddItemBtn = (props) => {
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
    </>
  );
};
