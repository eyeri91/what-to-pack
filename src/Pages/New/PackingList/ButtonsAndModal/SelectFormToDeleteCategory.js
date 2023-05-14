import React from "react";
import { capitalizeFirstChar } from "../../../../utils/utils";

export const SelectFormToDeleteCategory = (props) => {
  const categories = props.categories;
  const categoryOption = (category) => {
    const capitalizedCategory = capitalizeFirstChar(category);
    return <option value={category}>{capitalizedCategory}</option>;
  };

  const setSelectedCat = props.onSelectChange;
  const handleOnSelectedChange = (e) => {
    setSelectedCat(e.target.value);
  };

  return (
    <select
      className="form-select me-3"
      aria-label="Default select example"
      onChange={handleOnSelectedChange}
    >
      <option selected>....</option>;
      {categories.map((category) => categoryOption(category))}
    </select>
  );
};
