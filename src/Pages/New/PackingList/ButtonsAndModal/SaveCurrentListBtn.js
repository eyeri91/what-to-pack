import React from "react";
import { SaveCurrentListModal } from "./SaveCurrentListModal";

export const SaveCurrentListBtn = () => {
  const saveListBtnId = "saveBtnId";

  return (
    <>
      <SaveCurrentListModal id={saveListBtnId} />
      <button
        type="button"
        className="save-list-btn rounded reset-btn d-flex align-items-center"
        data-bs-toggle="modal"
        data-bs-target={`#${saveListBtnId}`}
        id={saveListBtnId}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up me-2"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>
        Save this trip
      </button>
    </>
  );
};
