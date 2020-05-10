import React from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import styled from "styled-components";

import { sendUserMessage, deleteChat } from "../../redux/actions/chatAction";
import { BOT, USER } from "../../redux/actions/type";
import { FIRST_MESSAGE } from "../../utils/const";

import UserMessage from "./UserMessage";
import BotMessage from "./BotMessage";
import AttachmentController from "./AttachmentController";

const Main = styled(Container)`
  margin: 5rem 0;
  flex-grow: 1;
  padding-bottom: ${(props) => (props.qrActive ? "275px" : "0px")};
`;

class ChatContent extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  scrollToBottom = (direct = false) => {
    // passing direct to this forces scrolling instantly, instead of animating.
    if (this.ref.current?.scrollIntoView) {
      this.ref.current.scrollIntoView({ behavior: direct ? "auto" : "smooth" });
    }
  };

  componentDidUpdate = () => {
    this.scrollToBottom();
  };

  componentDidMount() {
    // Check if Chat doesnot exist send first message
    if (this.props.chat === undefined || !this.props.chat.length) {
      this.props.sendUserMessage(FIRST_MESSAGE);
    }
    // If chat has some message scroll to bottom
    if (this.props.chat.length) {
      this.scrollToBottom();
    }
    if (this.props.history?.scrollToBottom) {
      this.scrollToBottom(true);
    }
  }

  // componentWillUnmount() {
  // this.props.deleteChat();
  // }

  renderAttachment(attachment) {
    console.log(attachment);
    return attachment.map((singleAttachment, index) => {
      return <AttachmentController key={`A${index}`} {...singleAttachment} />;
    });
  }
  render() {
    if (this.props.chat === undefined || !this.props.chat.length) {
      return (
        <Main fluid className="px-2 px-md-3 px-lg-5">
          <div className="card-body msg_card_body">Please Begin Your Chat</div>
        </Main>
      );
    }
    return (
      <Main
        fluid
        className="px-2 px-md-3 px-lg-5"
        qrActive={this.props.isQuickReplyActive ? true : false}
      >
        {this.props.chat.map((chatMessage, index) => {
          // Check if message need to be displayed on Bot Screen
          if (chatMessage.toDisplayMsg === 0) {
            return null;
          }
          return (
            <React.Fragment key={index}>
              {
                // Show User Message
                chatMessage.messageBy === USER ? (
                  <UserMessage
                    key={index}
                    userMessage={chatMessage.userMessage}
                  />
                ) : (
                  ""
                )
              }

              {
                // Show Bot Message
                (chatMessage.messageBy === BOT && chatMessage.queryResult.length > 0 && chatMessage.queryResult[0] !== '') ? (
                  <BotMessage key={index} {...chatMessage} />
                ) : (
                  ""
                )
              }

              {
                // Show Bot Attachments
                chatMessage.messageBy === BOT &&
                typeof chatMessage.attachment !== "undefined" &&
                chatMessage.attachment.length > 0
                  ? this.renderAttachment(chatMessage.attachment)
                  : ""
              }
            </React.Fragment>
          );
        })}
        <div ref={this.ref}></div>
      </Main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
    table: state.table,
    isQuickReplyActive: state.quickReply.displayQuickReply,
  };
};

export default connect(mapStateToProps, { sendUserMessage, deleteChat })(
  ChatContent
);
