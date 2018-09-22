import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import district from "./district";
import problems from "./problems";
import render from "./render";

const rootReducer = combineReducers({
  district,
  problems,
  render,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
