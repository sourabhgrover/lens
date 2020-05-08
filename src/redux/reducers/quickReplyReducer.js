import { DISPLAY_QR_CARDS, HIDE_QR_CARDS } from "../actions/type";

const initialState = { displayQuickReply: false, value: {} };

const quickReplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_QR_CARDS:
      return Object.assign({}, state, {
        displayQuickReply: true,
        value: action.payload,
      });

    case HIDE_QR_CARDS:
      return Object.assign({}, state, {
        displayQuickReply: false,
        value: undefined,
      });
    default:
      return state;
  }
};

export default quickReplyReducer;
