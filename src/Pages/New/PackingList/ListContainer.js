import React from "react";
// import basicList from "./basicList";
import { capitalizeFirstChar } from "../../../utils/utils";
import { v4 as uuidv4 } from "uuid";

const ListContainer = (props) => {
  const list = props.list;
  // const addItem =
  const deleteItem = (e) => {
    console.log(e.target);
  };
  // const addCategory =
  // const deleteCategory=

  // const addItemBtn = <button className="reset-btn">+</button>;
  const DeleteItemBtn = (props) => (
    <button
      onClick={deleteItem}
      className="reset-btn delete-item-btn"
      id={props.itemKey}
    >
      -
    </button>
  );
  // const addCategoryBtn
  // const deleteCategoryBtn

  //
  // set list state whenever + or - button gets clicked in list item or category
  // Create a function to remove category key or value in basicList
  // useEffect -> when any + or - button gets clicked-> trigger setListState.
  // When Save button clicked-> save the current state
  return (
    <div className="category-container">
      {list.map((listCategory) => {
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
                    const itemKey = uuidv4();
                    return (
                      <li
                        className="list-group-item packing-item ms-2 d-flex justify-content-between"
                        key={itemKey}
                      >
                        <span className="me-3">{item}</span>
                        <DeleteItemBtn itemKey={itemKey} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ListContainer;
