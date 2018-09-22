import { applyMiddleware, createStore } from "redux"; //  Main Redux library
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducers from "../reducers"; //  List of Reducers we created
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware, logger))
);

export default store;
