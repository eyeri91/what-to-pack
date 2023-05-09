import React from "react";

export const InputToAddItemOrCategory = (props) => {
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
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={() => {}}
      >
        Save
      </button>
    </div>
  );
};
