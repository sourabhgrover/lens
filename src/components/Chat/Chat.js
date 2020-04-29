import React from 'react';


import lensApi from "../../apis/lensApi"
import ChatHeader from "./ChatHeader";
import ChatInputContainer from "./ChatInputContainer";
import ChatFooter from "./ChatFooter";
import ChatContent from "./ChatContent";

class Chat extends React.Component {


    // state = {
    //     sessionId: "",
    //     responseId: "",
    //     queryResult: [],
    //     attachment: []
    // }
    // onUserMessageSubmit = (userEnteredMsg) => {
    //     lensApi.post("messages",
    //         {
    //             "requestId": "123as45",
    //             "sessionId": "bf3cc9a2f5de",
    //             "type": "message",
    //             "event": "false",
    //             "userMessage": "Haircut on Saturday",
    //             "attachment": ""
    //         }
    //     ).then(res => {
    //         console.log(res);
    //         if (res.status === 200) {
    //             let { sessionId, responseId, queryResult } = res.data;
    //             console.log(sessionId, responseId, queryResult);
    //             this.setState({ sessionId, responseId, queryResult })
    //         }
    //     }).catch((err) => console.log("Can’t access " + err));
    // }
    render() {
        return (
            <>
                <ChatHeader />
                <ChatContent />
                <ChatInputContainer />

                {/* <ChatFooter onUserMessageSubmit={this.onUserMessageSubmit} /> */}
            </>
        );
    }
}

export default Chat;