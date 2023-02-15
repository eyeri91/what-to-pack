import { createSlice } from "@reduxjs/toolkit";

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState: {
    weather: "",
  },
  reducers: {
    checkWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const { checkWeather } = currentWeatherSlice.actions;

export default currentWeatherSlice.reducer;
