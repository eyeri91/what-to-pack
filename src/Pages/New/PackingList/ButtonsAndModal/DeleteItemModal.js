import React from "react";
import { useDispatch } from "react-redux";
import { deleteListItem } from "../../../../redux/packingListSlice";

export const DeleteItemModal = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="DeleteItemModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <div className="modal-title fs-5" id="DeleteItemModal">
              Do you really want to delete
              <span className="fw-bold"> {props.item}</span>
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
              onClick={() => {
                dispatch(
                  deleteListItem({
                    category: props.category,
                    item: props.item,
                  })
                );
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
