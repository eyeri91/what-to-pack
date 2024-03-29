import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addListItem,
  addListCategory,
  // updatePackingList,
} from "../../../../redux/packingListSlice";

export const InputToAddItemOrCategory = (props) => {
  const dispatch = useDispatch();
  const [newElement, setNewElement] = useState("");
  const handleChange = (e) => {
    setNewElement(e.target.value);
  };
  const elementType = props.elementType;
  const showDifferentPlaceHolderForDifferentElements = (elementType) => {
    return elementType === "category" ? "Category to add" : "Item to add";
  };
  return (
    <div className="input-group me-3">
      <input
        type="text"
        className="form-control"
        placeholder={showDifferentPlaceHolderForDifferentElements(elementType)}
        aria-label="Input to add items or categories"
        aria-describedby="button-addon2"
        onChange={handleChange}
        value={newElement}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        data-bs-dismiss="modal"
        onClick={() => {
          elementType === "item"
            ? dispatch(
                addListItem({ category: props.category, item: newElement })
              )
            : dispatch(addListCategory({ category: newElement, item: [] }));
        }}
      >
        Save
      </button>
    </div>
  );
};
