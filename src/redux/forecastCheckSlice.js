import { createSlice } from "@reduxjs/toolkit";

export const forecastCheckSlice = createSlice({
  name: "forecastCheck",
  initialState: {
    forecast: "",
  },
  reducers: {
    checkForecast: (state, action) => {
      state.forecast = action.payload;
    },
  },
});

export const { checkForecast } = forecastCheckSlice.actions;

export default forecastCheckSlice.reducer;
