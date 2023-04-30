import { createSlice } from "@reduxjs/toolkit";

export const packingListSlice = createSlice({
  name: "packingList",
  initialState: {
    packingList: "",
  },
  reducers: {
    updatePackingList: (state, action) => {
      state.packingList = action.payload;
    },
  },
});

export const { updatePackingList } = packingListSlice.actions;

export default packingListSlice.reducer;
