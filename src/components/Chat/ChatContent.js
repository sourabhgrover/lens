import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";
import QuickReply from "./QuickReply";

import { BOT, USER } from "../../redux/actions/type";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";

import UserImg from "../../images/5.png";
import BotImg from "../../images/6.png";

import {
    FaClipboardList,
    FaBoxOpen,
    FaGlobeAsia,
    FaWineBottle,
    FaVenusMars,
    FaComments,
} from "react-icons/fa";

class ChatContent extends React.Component {

    render() {
        if (this.props.chat === undefined || !this.props.chat.length) {
            return <div className="card-body msg_card_body">Please Begin Your Chat</div>;
        }
        return (
            <Container fluid className="px-2 px-md-3 px-lg-5 mt-5">

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
                <ChatRight text="What can you do?" img={UserImg} />
                <ChatLeft text="Here are things I can do." img={BotImg} />
                {/* <Container className="w-75 ml-5 ml-sm-0">
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
                </Container> */}
                <ChatRight
                    text="I would like to know about top 3 fairness creams with maximum reviews"
                    img={UserImg}
                />
                <ChatLeft text="Here are the ones." img={BotImg} />
                {/* <ImageQuickReply /> */}
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        chat: state.chat
    };
};

export default connect(mapStateToProps)(ChatContent);