import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";



import { BOT, USER } from "../../redux/actions/type";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import AttachmentContainer from "./AttachmentContainer";
import QuickReply from "./QuickReply";
import {
    FaClipboardList,
    FaBoxOpen,
    FaGlobeAsia,
    FaWineBottle,
    FaVenusMars,
    FaComments,
} from "react-icons/fa";


class ChatContent extends React.Component {

    renderAttachment(attachment) {
        // console.log("renderAttachment");
        return (
            attachment.map((singleAttachment, index) => {
                // console.log(singleAttachment);
                return (<AttachmentContainer {...singleAttachment} />);
            })
        );
        // return (
        //     <>
        //         {/* <div>Attachment will fall here</div> */}
        //         <AttachmentContainer></AttachmentContainer>
        //     </>
        // <BotMessage key={index}  {...chatMessage} />
        // )
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

                <Container className="w-75 ml-5 ml-sm-0">
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <QuickReply
                                icon={<FaClipboardList />}
                                text="Summary Details"
                                color="lightblue"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <QuickReply
                                icon={<FaBoxOpen />}
                                text="How many beauty products sold overall?"
                                color="lightgreen"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <QuickReply
                                icon={<FaGlobeAsia />}
                                text="Region wise data on products sold"
                                color="blue"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <QuickReply
                                icon={<FaWineBottle />}
                                text="Top 5 beauty products"
                                color="yellowgreen"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <QuickReply
                                icon={<FaVenusMars />}
                                text="Gender wise data on products sold"
                                color="purple"
                            />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <QuickReply
                                icon={<FaComments />}
                                text="Review feedback of the products"
                                color="red"
                            />
                        </Col>
                    </Row>
                </Container>

                {/* <ImageQuickReply /> */}
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