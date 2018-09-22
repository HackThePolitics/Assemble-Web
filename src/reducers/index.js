import { combineReducers } from "redux";
import district from "./district";
import problems from "./problems";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  district,
  problems,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
