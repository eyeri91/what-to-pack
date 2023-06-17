import React from "react";
import { SaveCurrentListModal } from "./SaveCurrentListModal";

export const SaveCurrentListBtn = () => {
  const saveListBtnId = "saveBtnId";

  return (
    <>
      <SaveCurrentListModal id={saveListBtnId} />
      <button
        type="button"
        className="save-list-btn border-0 rounded-3 py-1 px-3 text-center"
        data-bs-toggle="modal"
        data-bs-target={`#${saveListBtnId}`}
        id={saveListBtnId}
      >
        Save
      </button>
    </>
  );
};
