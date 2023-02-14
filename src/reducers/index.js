import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import weatherReducer from "./weatherReducer";

const allReducers = combineReducers({
  location: locationReducer,
  weather: weatherReducer,
});

export default allReducers;
