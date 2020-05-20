import {
  BOT_RESPONSE,
  USER_REQUEST,
  BOT,
  USER,
  DELETE_CHAT,
} from "../actions/type";
// import { FIRST_MESSAGE } from "../../utils/const";

const intialState = [];
const chatReducer = (state = intialState, action) => {
  switch (action.type) {
    case BOT_RESPONSE:
      return [...state, { ...action.payload, messageBy: BOT, toDisplayMsg: 1 }];
    case USER_REQUEST:
      // check if it's first message don't display that message and set it to 0
      return [
        ...state,
        { ...action.payload, messageBy: USER, toDisplayMsg: action.toDisplay },
      ];
    case DELETE_CHAT:
      return intialState;
    default:
      return state;
  }
};

export default chatReducer;
