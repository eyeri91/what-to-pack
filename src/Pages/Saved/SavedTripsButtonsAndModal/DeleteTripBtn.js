import React from "react";
import DeleteTripModal from "./DeleteTripModal";

export const DeleteTripBtn = (props) => {
  const deleteSavedTripBtnId = "deleteTripBtnId";

  return (
    <>
      <DeleteTripModal tripKey={props.tripKey} id={deleteSavedTripBtnId} />
      <button
        type="button"
        className="delete-trip-btn border-0 rounded-3 py-1 px-3 me-5"
        data-bs-toggle="modal"
        data-bs-target={`#${deleteSavedTripBtnId}`}
        id={deleteSavedTripBtnId}
      >
        Delete
      </button>
    </>
  );
};
