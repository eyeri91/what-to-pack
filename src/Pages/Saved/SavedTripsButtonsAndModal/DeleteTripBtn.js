import React from "react";
import DeleteTripModal from "./DeleteTripModal";

export const DeleteTripBtn = (props) => {
  const deleteSavedTripBtnId = "deleteTripBtnId";

  return (
    <>
      <DeleteTripModal tripKey={props.tripKey} id={deleteSavedTripBtnId} />
      <button
        type="button"
        className="reset-btn delete-trip-btn d-flex align-items-center"
        data-bs-toggle="modal"
        data-bs-target={`#${deleteSavedTripBtnId}`}
        id={deleteSavedTripBtnId}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up me-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
        Delete this trip
      </button>
    </>
  );
};
