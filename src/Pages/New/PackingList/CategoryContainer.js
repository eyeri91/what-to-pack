import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { EmptyItemList } from "./EmptyItemList";
import { AddItemBtn } from "./ButtonsAndModal/AddItemBtn";
import { UnorderedItemListComponent } from "./UnorderedItemListComponent";
import { v4 as uuidv4 } from "uuid";

export const CategoryContainer = (props) => {
  // const checkFirstCategory = (categoryStatus) =>
  //   categoryStatus === true ? "collapse flex-fill show" : "collapse flex-fill";

  return (
    <div className="packing-container d-flex ms-3" key={props.category}>
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
      <div className="collapse flex-fill " id={`${props.category}`}>
        <ul className="list-group list-group-flush packing-list">
          {props.items.length !== 0 ? (
            props.items.map((item) => {
              const itemId = uuidv4();
              return (
                <UnorderedItemListComponent
                  isItSavedTrip={props.isItSavedTrip}
                  key={itemId}
                  item={item}
                  itemId={itemId}
                  category={props.category}
                />
              );
            })
          ) : (
            <EmptyItemList key={"emptyList"} />
          )}

          <AddItemBtn
            id={props.addBtnId}
            category={props.category}
            key={props.addBtnId}
          />
        </ul>
      </div>
    </div>
  );
};

export default CategoryContainer;
