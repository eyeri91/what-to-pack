import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";
import forecastReducer from "./forecastReducer";

const allReducers = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
  forecast: forecastReducer,
});

export default allReducers;
