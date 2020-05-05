import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import summaryReducer from "./summaryReducer";

const combineReducer = combineReducers({
  chat: chatReducer,
  summary: summaryReducer
});

export default combineReducer;
