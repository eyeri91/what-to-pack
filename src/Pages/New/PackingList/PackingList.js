import React from "react";
import { useSelector } from "react-redux";
import { CategoryContainer } from "./CategoryContainer";
import { AddCategoryBtn } from "./ButtonsAndModal/AddCategoryBtn";
import { DeleteCategoryBtn } from "./ButtonsAndModal/DeleteCategoryBtn";
import { v4 as uuidv4 } from "uuid";

const PackingList = (props) => {
  const listState = useSelector((state) => state.packingList.packingList);

  let isItFirstCategory = false;
  let categories = [];
  return (
    <div className="category-container d-flex flex-column">
      {listState.map((listCategory) => {
        for (const [category, items] of Object.entries(listCategory)) {
          categories.push(category);
          const addBtnId = uuidv4();
          return (
            <CategoryContainer
              isItFirstCategory={isItFirstCategory}
              category={category}
              items={items}
              addBtnId={addBtnId}
            />
          );
        }

        return false;
      })}
      <div className="category-btns d-flex justify-content-evenly ">
        <AddCategoryBtn />
        <DeleteCategoryBtn categories={categories} />
      </div>
    </div>
  );
};

export default PackingList;
