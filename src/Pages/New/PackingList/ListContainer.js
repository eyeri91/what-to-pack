import React from "react";
import { capitalizeFirstChar } from "../../../utils/utils";
import { useSelector } from "react-redux";
import { ListModal } from "./ListModal";
// import { deleteListItem } from "../../../redux/packingListSlice";
import { v4 as uuidv4 } from "uuid";

const ListContainer = () => {
  // const dispatch = useDispatch();
  const listState = useSelector((state) => state.packingList.packingList);

  const DeleteItemBtn = (props) => (
    <>
      <ListModal
        item={props.item}
        category={props.category}
        id={props.category + props.id}
      />
      <button
        type="button"
        className="reset-btn delete-item-btn"
        data-bs-toggle="modal"
        data-bs-target={`#${props.category + props.id}`}
        id={props.id}
      >
        -
      </button>
    </>
  );
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
