export const deleteItem = (list, category, item) => {
  return list.map((categoryObject) => {
    for (const [key, values] of Object.entries(categoryObject)) {
      if (key !== category) {
        continue;
      } else {
        const newValues = values.filter((value) => value !== item);
        categoryObject[key] = newValues;
      }
    }
    return categoryObject;
  });
};
