import {
  BOT_SUMMARY_RESPONSE, CLEAR_SUMMARY
} from "../actions/type";


const intialState = [];
const summaryReducer = (state = intialState, action) => {
  switch (action.type) {
    case BOT_SUMMARY_RESPONSE:
      return [...state, { ...action.payload }];
    case CLEAR_SUMMARY:
      return intialState;
    default:
      return state;
  }
};

export default summaryReducer;
