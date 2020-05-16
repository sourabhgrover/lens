import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import combineReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
