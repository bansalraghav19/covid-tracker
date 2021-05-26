import { combineReducers } from "redux";
import fetchCovidData from "../reducer";

const rootReducer = combineReducers({
  trackerData: fetchCovidData,
});

export default rootReducer;
