import { configureStore } from "@reduxjs/toolkit";
import locatorReducer from "../redux/locatorSlice";
import forecastCheckReducer from "../redux/forecastCheckSlice";
import currentWeatherReducer from "../redux/currentWeatherSlice";

export default configureStore({
  reducer: {
    locator: locatorReducer,
    forecast: forecastCheckReducer,
    weather: currentWeatherReducer,
  },
});
