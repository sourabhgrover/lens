import lensApi from "../../apis/lensApi";
import { BOT_SUMMARY_RESPONSE, CLEAR_SUMMARY } from "./type";

export const sendSummaryMessage = (userMessage) => {
  return (dispatch) => {
    // Create request data
    let requestData = {
      requestId: "123as45",
      sessionId: "bf3cc9a2f5de",
      type: "message",
      event: "false",
      userMessage: userMessage,
      attachment: "",
    };

    lensApi
      .post("messages", requestData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: BOT_SUMMARY_RESPONSE,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log("Can’t access " + err));
  };
};

export const clearSummary = () => {
  console.log("clear summary");
  return {
    type: CLEAR_SUMMARY
  }
}

