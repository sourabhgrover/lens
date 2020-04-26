const intialState = [{
    sessionId: "bf3cc9a2f5de",
    responseId: "4013f46a-c088-4941-b3bb-0f6b1aabfd50-eec93b43",
    "queryResult": [
        "I didn't get that. Can you repeat?"
    ],
    "attachment": [
        {
            "type": "quickReply",
            "value": [
                "Alright !"
            ]
        }
    ],
    "languageCode": "en",
    "status": {
        "code": 200,
        "errorType": "success"
    }
}];

const chatReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state;
        default:
            return state;
    }
}

export default chatReducer;