import React, { useState } from "react";
// import basicList from "../basicList";
import { useDispatch } from "react-redux";
// import { deleteCategory } from "../../../../utils/listUtils";
import { deleteListCategory } from "../../../../redux/packingListSlice";
import { SelectFormToDeleteCategory } from "./SelectFormToDeleteCategory";

export const DeleteCategoryModal = (props) => {
  const [selectedCat, setSelectedCat] = useState("");
  const dispatch = useDispatch();
  return (
    <div
      className="modal fade"
      id={props.id}
      tabIndex="-1"
      aria-labelledby="DeleteCategoryModal"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header border-bottom-0 d-flex ">
            <SelectFormToDeleteCategory
              categories={props.categories}
              onSelectChange={setSelectedCat}
            />
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
              className="reset-btn "
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="reset-btn "
              data-bs-dismiss="modal"
              onClick={() => {
                // deleteCategory(basicList, selectedCat);
                dispatch(deleteListCategory({ category: selectedCat }));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
