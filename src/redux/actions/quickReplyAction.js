import {
  DISPLAY_QR_CARDS,
  HIDE_QR_CARDS,
  SHOW_REPLY_CONTAINER,
  HIDE_REPLY_CONTAINER,
} from "./type";

const displayQuickReply = (payloadType, data) => {
  return {
    type: DISPLAY_QR_CARDS,
    payloadType,
    payload: data,
  };
};

const hideQuickReply = () => {
  return {
    type: HIDE_QR_CARDS,
  };
};

const showContainer = () => {
  return {
    type: SHOW_REPLY_CONTAINER,
  };
};

const hideContainer = () => {
  return {
    type: HIDE_REPLY_CONTAINER,
  };
};

export { displayQuickReply, hideQuickReply, showContainer, hideContainer };
