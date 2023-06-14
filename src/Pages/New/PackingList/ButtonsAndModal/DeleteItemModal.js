import React from "react";
import { useDispatch } from "react-redux";
import { capitalizeFirstChar } from "../../../../utils/utils";
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
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <div className="modal-title fs-6" id="DeleteItemModal">
              Do you really want to delete
              <span className="fst-italic item-to-delete">
                {` ${capitalizeFirstChar(props.item)}`}
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
            <button
              type="button"
              className="reset-btn delete-confirm-btn"
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
              Delete
            </button>

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
