import React from "react";

export const SavedTripButton = (props) => {
  return (
    <button
      type="button"
      className="btn btn-lg btn-light position-relative me-5 mb-5"
    >
      {props.city}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-secondary">
        {props.date}
      </span>
    </button>
  );
};
