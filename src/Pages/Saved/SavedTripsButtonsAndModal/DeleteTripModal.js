import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { Link } from "react-router-dom";
export const DeleteTripModal = (props) => {
  const nameOfTrip = props.tripKey.substr(9);

  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="DeleteTripModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <div className="modal-title fs-6" id="DeleteTripModal">
              Do you really want to delete the trip to
              <span className="fst-italic item-to-delete">
                {` ${capitalizeFirstChar(nameOfTrip)}`}
              </span>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-footer">
            <Link to={`/saved/`}>
              <button
                type="button"
                className="reset-btn delete-confirm-btn"
                data-bs-dismiss="modal"
                onClick={() => {
                  localStorage.removeItem(props.tripKey);
                }}
              >
                Delete
              </button>
            </Link>
            <button
              type="button"
              className="reset-btn close-btn "
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTripModal;
