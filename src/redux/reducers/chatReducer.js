import { BOT_RESPONSE, USER_REQUEST, BOT, USER } from "../actions/type";

// const intialState = [{
//     messageBy: USER,
//     sessionId: "bf3cc9a2f5de",
//     responseId: "4013f46a-c088-4941-b3bb-0f6b1aabfd50-eec93b43",
//     "queryResult": [
//         "I didn't get that. Can you repeat?"
//     ],
//     "attachment": [
//         {
//             "type": "quickReply",
//             "value": [
//                 "Alright !"
//             ]
//         }
//     ],
//     "languageCode": "en",
//     "status": {
//         "code": 200,
//         "errorType": "success"
//     }
// }];
const intialState = [];
const chatReducer = (state = intialState, action) => {
    switch (action.type) {
        case BOT_RESPONSE:
            return [...state, { ...action.payload, 'messageBy': BOT }];
        case USER_REQUEST:
            return [...state, { ...action.payload, 'messageBy': USER }];
        default:
            return state;
    }
}

export default chatReducer;