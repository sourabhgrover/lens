import React from 'react';
import "./index.css";


import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatContent from "./ChatContent";

class Chat extends React.Component {

    onUserMessageSubmit = (userEnteredMsg) => {
        console.log("cooo");
        console.log(userEnteredMsg);
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