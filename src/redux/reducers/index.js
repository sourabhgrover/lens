import { combineReducers } from "redux";
import chatReducer from "./chatReducer";

const combineReducer = combineReducers({
  chat: chatReducer,
});

export default combineReducer;
