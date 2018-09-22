import { applyMiddleware, createStore, compose } from "redux"; //  Main Redux library
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { reactReduxFirebase } from 'react-redux-firebase';
import { reduxFirestore } from 'redux-firestore';

import reducers from '../reducers'; //  List of Reducers we created
import firebase from './firebase';

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Add BOTH firebase store enhancers when making store creator
const createStoreWithFirebase = compose(
  reduxFirestore(firebase),
  reactReduxFirebase(firebase, rrfConfig)
)(createStore);

const store = createStoreWithFirebase(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

export default store;
