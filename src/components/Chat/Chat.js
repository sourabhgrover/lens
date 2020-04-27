import React from 'react';
// import axios from "axios";
import "./index.css";

import lensApi from "../../apis/lensApi"
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatContent from "./ChatContent";

class Chat extends React.Component {


    state = {
        sessionId: "",
        responseId: "",
        queryResult: [],
        attachment: []
    }
    onUserMessageSubmit = (userEnteredMsg) => {
        lensApi.post("messages",
            {
                "requestId": "123as45",
                "sessionId": "bf3cc9a2f5de",
                "type": "message",
                "event": "false",
                "userMessage": "Haircut on Saturday",
                "attachment": ""
            }
        ).then(res => {
            console.log(res);
            if (res.status === 200) {
                let { sessionId, responseId, queryResult } = res.data;
                console.log(sessionId, responseId, queryResult);
                this.setState({ sessionId, responseId, queryResult })
            }
        }).catch((err) => console.log("Can’t access " + err));
    }
    render() {
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">

                    <div className="col-md-8 col-xl-6 chat">

                        <div className="card">

                            <ChatHeader />
                            <ChatContent />
                            <ChatFooter onUserMessageSubmit={this.onUserMessageSubmit} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;