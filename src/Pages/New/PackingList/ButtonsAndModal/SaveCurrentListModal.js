import React from "react";

export const SaveModal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="SaveModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header h5 border-bottom-0 d-flex ">
            Do you want to save the current packing list?
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-footer border-top-0 pt-0">
            <button
              type="button"
              className="reset-btn delete-confirm-btn "
              data-bs-dismiss="modal"
              onClick={() => {
                console.log();
              }}
            >
              Save
            </button>
            <button
              type="button"
              className="reset-btn close-btn  "
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
