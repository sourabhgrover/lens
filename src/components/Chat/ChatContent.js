import React from "react";
import { connect } from "react-redux";

import { BOT, USER } from "../../redux/actions/type";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

class ChatContent extends React.Component {


    render() {
        if (this.props.chat === undefined || !this.props.chat.length) {
            return <div className="card-body msg_card_body">Please Begin Your Chat</div>;
        }
        return (
            <div className="card-body msg_card_body">
                {this.props.chat.map((chatMessage, index) => {
                    if (chatMessage.messageBy === USER) {
                        return (
                            <UserMessage key={index} userMessage={chatMessage.userMessage} />
                        );
                    }

                    if (chatMessage.messageBy === BOT) {
                        return (
                            <BotMessage key={index} index={index} {...chatMessage} />
                        );
                    }
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        chat: state.chat
    };
};

export default connect(mapStateToProps)(ChatContent);