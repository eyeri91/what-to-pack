import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { DeleteItemBtn } from "./ButtonsAndModal/DeleteItemBtn";

export const UnorderedItemListComponent = (props) => {
  return (
    <li
      className="list-group-item packing-item ms-2 d-flex justify-content-between"
      key={props.itemId}
    >
      <span className="me-3">{capitalizeFirstChar(props.item)}</span>
      {props.isItSavedTrip === true ? null : (
        <DeleteItemBtn
          id={props.itemId}
          category={props.category}
          item={props.item}
        />
      )}
    </li>
  );
};

export default UnorderedItemListComponent;
