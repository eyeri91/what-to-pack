import { createSlice } from "@reduxjs/toolkit";
import basicList from "../Pages/New/PackingList/basicList";
import {
  deleteItem,
  addItem,
  addCategory,
  deleteCategory,
} from "../utils/listUtils";

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
    addListItem: (state, action) => {
      state.packingList = addItem(
        state.packingList,
        action.payload.category,
        action.payload.item
      );
    },
    addListCategory: (state, action) => {
      state.packingList = addCategory(
        state.packingList,
        action.payload.category,
        action.payload.item
      );
    },
    deleteListCategory: (state, action) => {
      state.packingList = deleteCategory(
        state.packingList,
        action.payload.category
      );
    },
  },
});

export const {
  deleteListItem,
  addListItem,
  addListCategory,
  deleteListCategory,
} = packingListSlice.actions;

export default packingListSlice.reducer;
