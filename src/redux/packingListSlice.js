import { createSlice } from "@reduxjs/toolkit";
import basicList from "../Pages/New/PackingList/basicList";
import { deleteItem } from "../utils/listUtils";

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
