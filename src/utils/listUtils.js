export const deleteItem = (list, category, item) => {
  return list.map((categoryObject) => {
    for (const [key, values] of Object.entries(categoryObject)) {
      if (key !== category) {
        continue;
      } else {
        const newValues = values.filter((value) => value !== item);
        newValues.length < 1
          ? (categoryObject[key] = "")
          : (categoryObject[key] = newValues);
      }
    }
    return categoryObject;
  });
};

export const addItem = (list, category, item) => {
  return list.map((categoryObject) => {
    for (const [key, values] of Object.entries(categoryObject)) {
      if (key === category) {
        const newValues = [...values, item];
        categoryObject[key] = newValues;
      }
    }
    return categoryObject;
  });
};

export const addCategory = (list, category, item) => {
  const newCategoryObject = {};
  newCategoryObject[category] = item;
  return (list = [...list, newCategoryObject]);
};

export const deleteCategory = (list, category) => {
  const updatedList = list.filter((categoryObject) => {
    for (const key of Object.keys(categoryObject)) {
      if (key !== category) {
        return categoryObject;
      } else {
        continue;
      }
    }
    return false;
  });
  return (list = [...updatedList]);
};
