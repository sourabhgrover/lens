import lensApi from "../../apis/lensApi";
import { BOT_RESPONSE, USER_REQUEST, DELETE_CHAT } from "./type";

export const sendUserMessage = (userMessage) => {
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
    dispatch({
      type: USER_REQUEST,
      payload: requestData,
    });
    lensApi
      .post("messages", requestData)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: BOT_RESPONSE,
            payload: res.data,
          });
        }
      })
      .catch((err) => console.log("Can’t access " + err));
  };
};

export const uploadFile = (file) => {
  return (dispatch) => {
    let data = new FormData();
    data.append("file", file);
    return lensApi
      .post("uploadReview", data)
      .then((res) => {
        if (res.status === 200) {
          dispatch({
            type: USER_REQUEST,
            payload: { userMessage: `File Uploaded: ${file.name}` },
          });
          dispatch({
            type: BOT_RESPONSE,
            payload: res.data,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: BOT_RESPONSE,
          payload: { queryResult: ["Some error has occured while uploading"] },
        });
      });
  };
};

export const deleteChat = () => {
  return { type: DELETE_CHAT };
};
