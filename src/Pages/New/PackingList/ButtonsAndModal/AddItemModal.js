import React from "react";

export const AddItemModal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="AddItemModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <div className="modal-title fs-5" id="AddItemModal">
              Adding Item
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="reset-btn delete-item-btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="reset-btn delete-item-btn"
              data-bs-dismiss="modal"
              //   onClick={() => {}}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
