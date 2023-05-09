import React from "react";
import { InputToAddItemOrCategory } from "./InputToAddItemOrCategory";

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
          <div className="modal-header border-bottom-0 d-flex ">
            <InputToAddItemOrCategory
              elementType={"item"}
              category={props.category}
            />
            {/* <div className="modal-title fs-5" id="AddItemModal">
              Adding Item
            </div> */}
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
