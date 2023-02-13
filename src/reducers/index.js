import { combineReducers } from "redux";
import locationReducer from "./location";

const allReducers = combineReducers({
  location: locationReducer,
});

export default allReducers;
