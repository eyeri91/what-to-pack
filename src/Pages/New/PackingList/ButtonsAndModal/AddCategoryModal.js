import React from "react";
import { InputToAddItemOrCategory } from "./InputToAddItemOrCategory";

export const AddCategoryModal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="AddCategoryModal"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom-0 d-flex ">
            <InputToAddItemOrCategory
              elementType={"category"}
              tripKey={props.tripKey}
              setFoundTripListState={props.setFoundTripListState}
            />

            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};
