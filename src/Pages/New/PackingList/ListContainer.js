import React from "react";
// import basicList from "./basicList";
import { capitalizeFirstChar } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
// import { updatePackingList } from "../../../redux/packingListSlicer";
import { v4 as uuidv4 } from "uuid";

// setState로 UI 계속 업뎃 하다가, 마지막에 세이브할때 디스패치로 리덕스 스테이트로

const ListContainer = () => {
  const dispatch = useDispatch();
  // dispatch(updatePackingList(basicList));
  const listState = useSelector((state) => state.packingList.packingList);
  // const [updatedList, setUpdatedList] = useState(basicList);
  // const packingList = useSelector((state) => state.packingList.packingList);

  const deleteItem = (category, item) => {
    listState.map((categoryObject) => {
      for (const [key, values] of Object.entries(categoryObject)) {
        if (key !== category) {
          continue;
        } else {
          values.map((value) => {
            if (value === item) {
              const indexOfItem = values.indexOf(item);
              return [
                ...values.slice(0, indexOfItem),
                ...values.slice(indexOfItem + 1),
              ];
            }
          });
        }
      }
    });
  };

  // const addCategory =
  // const deleteCategory=

  // const addItemBtn = <button className="reset-btn">+</button>;
  const DeleteItemBtn = (props) => (
    <button
      onClick={() => deleteItem(props.category, props.item)}
      className="reset-btn delete-item-btn"
      id={props.id}
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
