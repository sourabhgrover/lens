import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";



import { BOT, USER } from "../../redux/actions/type";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import AttachmentContainerInterface from "./AttachmentContainerInterface";



class ChatContent extends React.Component {

    renderAttachment(attachment) {
        return (
            attachment.map((singleAttachment, index) => {
                // console.log(singleAttachment);
                return (<AttachmentContainerInterface {...singleAttachment} />);
            })
        );

    }
    render() {
        if (this.props.chat === undefined || !this.props.chat.length) {
            return <div className="card-body msg_card_body">Please Begin Your Chat</div>;
        }
        return (
            <Container fluid className="px-2 px-md-3 px-lg-5 mt-5">

                {
                    this.props.chat.map((chatMessage, index) => {
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

            </Container>
        );
    }
}

const mapStateToProps = state => {
    console.log(state.chat);
    return {
        chat: state.chat
    };
};

export default connect(mapStateToProps)(ChatContent);