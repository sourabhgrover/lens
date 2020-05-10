import { DISPLAY_QR_CARDS, HIDE_QR_CARDS } from "./type";

const displayQuickReply = (data) => {
  return {
    type: DISPLAY_QR_CARDS,
    payload: data,
  };
};

const hideQuickReply = () => {
  return {
    type: HIDE_QR_CARDS,
  };
};

export { displayQuickReply, hideQuickReply };
