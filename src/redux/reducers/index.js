import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import summaryReducer from "./summaryReducer";
import quickReplyReducer from "./quickReplyReducer";

const combineReducer = combineReducers({
  chat: chatReducer,
  summary: summaryReducer,
  quickReply: quickReplyReducer,
});

export default combineReducer;
