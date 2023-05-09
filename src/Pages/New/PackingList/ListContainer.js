import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { DeleteItemBtn } from "./Buttons/DeleteItemBtn";
import { v4 as uuidv4 } from "uuid";

const ListContainer = () => {
  const listState = useSelector((state) => state.packingList.packingList);

  // const addCategoryBtn
  // const deleteCategoryBtn

  return (
    <div className="category-container">
      {listState.map((listCategory) => {
        for (const [category, items] of Object.entries(listCategory)) {
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
                  <button className="reset-btn add-item-btn">+</button>
                </ul>
              </div>
            </div>
          );
        }
        return false;
      })}
    </div>
  );
};

export default ListContainer;
