import React from "react";

export const ListModal = (props) => {
  return (
    <div
      class="modal fade"
      id={props.id}
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header border-bottom-0">
            <div class="modal-title fs-5" id="exampleModalLabel">
              Do you really want to delete
              <span className="fw-bold"> {props.item}</span>
            </div>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="reset-btn delete-item-btn"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="reset-btn delete-item-btn">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
