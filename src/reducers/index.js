import { combineReducers } from "redux";
import district from "./district";
import problems from "./problems";

const rootReducer = combineReducers({
  district,
  problems
});

export default rootReducer;
