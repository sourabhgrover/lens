import {
  BOT_RESPONSE,
} from "../actions/type";


const intialState = [];
const summaryReducer = (state = intialState, action) => {
  switch (action.type) {
    case BOT_RESPONSE:
      return [...state, { ...action.payload }];
    default:
      return state;
  }
};

export default summaryReducer;
