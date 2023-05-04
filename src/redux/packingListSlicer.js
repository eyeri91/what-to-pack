import { createSlice } from "@reduxjs/toolkit";
import basicList from "../Pages/New/PackingList/basicList";

export const packingListSlice = createSlice({
  name: "packingList",
  initialState: {
    packingList: basicList,
  },
  reducers: {
    updatePackingList: (state, action) => {
      state.packingList = action.payload;
    },
  },
});

export const { updatePackingList } = packingListSlice.actions;

export default packingListSlice.reducer;
