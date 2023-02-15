import { createSlice } from "@reduxjs/toolkit";

export const locatorSlice = createSlice({
  name: "locator",
  initialState: {
    location: "",
  },
  reducers: {
    getLocation: (state, action) => {
      state.location = action.payload;
    },
  },
});

export const { getLocation } = locatorSlice.actions;

export default locatorSlice.reducer;
