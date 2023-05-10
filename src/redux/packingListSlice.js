import { createSlice } from "@reduxjs/toolkit";
import basicList from "../Pages/New/PackingList/basicList";
import { deleteItem, addItem } from "../utils/listUtils";

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
  },
});

export const { deleteListItem, addListItem } = packingListSlice.actions;

export default packingListSlice.reducer;
