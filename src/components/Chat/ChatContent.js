import React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import styled from "styled-components";

import { sendUserMessage } from "../../redux/actions/chatAction";
import { BOT, USER } from "../../redux/actions/type";
import { FIRST_MESSAGE } from "../../utils/const";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import AttachmentController from "./AttachmentController";

const Main = styled(Container)`
  flex-grow: 1;
`;


class ChatContent extends React.Component {


    componentDidMount() {
        console.log("componentDidMount");
        this.props.sendUserMessage(FIRST_MESSAGE)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }
    renderAttachment(attachment) {
        return (
            attachment.map((singleAttachment, index) => {
                return (<AttachmentController key={`A${index}`} {...singleAttachment} />);
            })
        );

    }
    render() {
        if (this.props.chat === undefined || !this.props.chat.length) {
            return <Main fluid className="px-2 px-md-3 px-lg-5 mt-5"><div className="card-body msg_card_body">Please Begin Your Chat</div></Main>;
        }
        return (
            <Main fluid className="px-2 px-md-3 px-lg-5 mt-5">
                {
                    this.props.chat.map((chatMessage, index) => {
                        // Check if message need to be displayed on Bot Screen
                        if (chatMessage.toDisplayMsg === 0) {
                            return null;
                        }
                        return (
                            <React.Fragment key={index}>
                                {
                                    // Show User Message
                                    (chatMessage.messageBy === USER) ? <UserMessage key={index} userMessage={chatMessage.userMessage} /> : ''
                                }

                                {
                                    // Show Bot Message
                                    (chatMessage.messageBy === BOT) ? <BotMessage key={index}  {...chatMessage} /> : ''
                                }

                                {
                                    // Show Bot Attachments
                                    (chatMessage.messageBy === BOT && (typeof chatMessage.attachment !== 'undefined') && chatMessage.attachment.length > 0) ? this.renderAttachment(chatMessage.attachment) : ''
                                }

                            </React.Fragment>
                        );

                    })
                }

            </Main>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        chat: state.chat
    };
};

export default connect(mapStateToProps, { sendUserMessage })(ChatContent);