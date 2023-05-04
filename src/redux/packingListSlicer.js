import { createSlice } from "@reduxjs/toolkit";
import basicList from "../Pages/New/PackingList/basicList";

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

export const packingListSlice = createSlice({
  name: "packingList",
  initialState: {
    packingList: basicList,
  },
  reducers: {
    deleteListItem: (state, action) => {
      state.packingList = deleteItem(
        state.packingList,
        action.payload.category,
        action.payload.item
      );
    },
  },
});

export const { deleteListItem } = packingListSlice.actions;

export default packingListSlice.reducer;
