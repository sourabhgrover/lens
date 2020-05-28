import { combineReducers } from "redux";
import chatReducer from "./chatReducer";
import summaryReducer from "./summaryReducer";
import quickReplyReducer from "./quickReplyReducer";
import authReducer from "./authReducer";

const combineReducer = combineReducers({
  chat: chatReducer,
  summary: summaryReducer,
  quickReply: quickReplyReducer,
  session: authReducer,
});

export default combineReducer;
