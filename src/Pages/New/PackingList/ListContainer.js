import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { DeleteItemBtn } from "./ButtonsAndModal/DeleteItemBtn";
import { AddItemBtn } from "./ButtonsAndModal/AddItemBtn";
import { AddCategoryBtn } from "./ButtonsAndModal/AddCategoryBtn";
import { v4 as uuidv4 } from "uuid";

const ListContainer = () => {
  const listState = useSelector((state) => state.packingList.packingList);

  return (
    <div className="category-container d-flex flex-column">
      {listState.map((listCategory) => {
        for (const [category, items] of Object.entries(listCategory)) {
          const addBtnId = uuidv4();
          return (
            <div className="packing-container d-flex" key={category}>
              <button
                className="reset-btn category-btn mb-2 packing-category"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${category}`}
                aria-expanded="true"
                aria-controls={`${category}`}
              >
                {capitalizeFirstChar(category)}
              </button>
              <div className="collapse flex-fill" id={`${category}`}>
                <ul className="list-group list-group-flush packing-list">
                  {items.map((item) => {
                    const itemId = uuidv4();
                    return (
                      <li
                        className="list-group-item packing-item ms-2 d-flex justify-content-between"
                        key={item}
                      >
                        <span className="me-3">{item}</span>
                        <DeleteItemBtn
                          id={itemId}
                          category={category}
                          item={item}
                        />
                      </li>
                    );
                  })}
                  <AddItemBtn id={addBtnId} category={category} />
                </ul>
              </div>
            </div>
          );
        }
        return false;
      })}
      <AddCategoryBtn />
    </div>
  );
};

export default ListContainer;
