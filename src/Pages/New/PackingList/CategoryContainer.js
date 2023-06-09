import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { EmptyItemList } from "../EmptyItemList";
import { AddItemBtn } from "./ButtonsAndModal/AddItemBtn";
import { UnorderedItemListComponent } from "./UnorderedItemListComponent";
import { v4 as uuidv4 } from "uuid";

export const CategoryContainer = (props) => {
  return (
    <div className="packing-container d-flex" key={props.category}>
      <button
        className="reset-btn category-btn mb-2 packing-category"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#${props.category}`}
        aria-expanded="true"
        aria-controls={`${props.category}`}
      >
        {capitalizeFirstChar(props.category)}
      </button>
      <div className="collapse flex-fill" id={`${props.category}`}>
        <ul className="list-group list-group-flush packing-list">
          {props.items ? (
            props.items.map((item) => {
              const itemId = uuidv4();
              return (
                <UnorderedItemListComponent
                  item={item}
                  itemId={itemId}
                  category={props.category}
                />
              );
            })
          ) : (
            <EmptyItemList />
          )}
          <AddItemBtn id={props.addBtnId} category={props.category} />
        </ul>
      </div>
    </div>
  );
};

export default CategoryContainer;
