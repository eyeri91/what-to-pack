import React from "react";
import { AddCategoryModal } from "./AddCategoryModal";

export const AddCategoryBtn = () => {
  const addCategoryModalId = "addCatModal";
  return (
    <>
      <AddCategoryModal id={addCategoryModalId} />
      <button
        type="button"
        className="reset-btn add-category-btn"
        data-bs-toggle="modal"
        data-bs-target={`#${addCategoryModalId}`}
      >
        +
      </button>
    </>
  );
};
