import React from "react";
import { connect } from "react-redux";

import { BOT, USER } from "../../redux/actions/type";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

class ChatContent extends React.Component {

    render() {
        console.log(this.props.chat);
        if (this.props.chat === undefined) {
            return <div>Loading...</div>;
        }
        return (
            <div className="card-body msg_card_body">
                {this.props.chat.map(chatMessage => {
                    console.log(chatMessage);
                    if (chatMessage.messageBy === USER) {
                        return (
                            <UserMessage userMessage={chatMessage.userMessage} />
                        );
                    }

                    if (chatMessage.messageBy === BOT) {
                        return (
                            <BotMessage {...chatMessage} />
                        );
                    }
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        chat: state.chat
    };
};

export default connect(mapStateToProps)(ChatContent);