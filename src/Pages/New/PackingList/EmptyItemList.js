import React from "react";

export const EmptyItemList = () => {
  return (
    <li className="list-group-item packing-item ms-2">
      <span className="me-3 text-secondary d-flex justify-content-center">
        It's empty
      </span>
    </li>
  );
};

export default EmptyItemList;
