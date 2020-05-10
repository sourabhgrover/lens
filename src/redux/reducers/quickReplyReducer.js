import {
  DISPLAY_QR_CARDS,
  HIDE_QR_CARDS,
  SHOW_REPLY_CONTAINER,
  HIDE_REPLY_CONTAINER,
} from "../actions/type";

const initialState = {
  displayQuickReply: false,
  value: {},
  type: undefined,
  showContainer: false,
};

const quickReplyReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_QR_CARDS:
      return Object.assign({}, state, {
        displayQuickReply: true,
        value: action.payload,
        type: action.payloadType,
        showContainer: true,
      });

    case HIDE_QR_CARDS:
      return Object.assign({}, state, {
        displayQuickReply: false,
        value: undefined,
        type: undefined,
        showContainer: false,
      });

    case SHOW_REPLY_CONTAINER:
      console.log(state);
      return Object.assign({}, state, {
        showContainer: true,
      });

    case HIDE_REPLY_CONTAINER:
      return Object.assign({}, state, {
        showContainer: false,
      });

    default:
      return state;
  }
};

export default quickReplyReducer;
