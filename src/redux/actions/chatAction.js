import lensApi from "../../apis/lensApi";
import { BOT_RESPONSE, USER_REQUEST } from "./type";

export const sendUserMessage = (userMessage) => {
    return dispatch => {

        // Create request data
        let requestData = {
            "requestId": "123as45",
            "sessionId": "bf3cc9a2f5de",
            "type": "message",
            "event": "false",
            "userMessage": userMessage,
            "attachment": ""
        }
        dispatch({
            type: USER_REQUEST,
            payload: requestData
        });
        lensApi.post("messages",
            requestData
        ).then(res => {
            console.log(res);
            if (res.status === 200) {
                dispatch({
                    type: BOT_RESPONSE,
                    payload: res.data
                })
            }
        }).catch((err) => console.log("Can’t access " + err));
    }
}