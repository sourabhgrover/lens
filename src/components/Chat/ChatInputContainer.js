import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ImageQuickReplyItem from "./ImageQuickReplyItem";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 2.5rem;
  background-color: #f8f8f8;
  z-index: 3;
  @media (max-width: 36rem) {
    padding: 1rem;
  }
`;

const QuickReplyContainer = styled.div`
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  &:after {
    content: "";
    padding-right: 1rem;
  }
  & > div {
    scroll-snap-align: center;
    @media (max-width: 992px) {
      width: 150px;
    }
  }
  @media (max-width: 992px) {
    justify-content: flex-start;
  }
`;

const ChatInputContainer = (props) => {
  return (
    <Wrapper>
      {props.displayQuickReplies ? (
        <QuickReplyContainer>
          {props.value.map((item, i) => (
            <ImageQuickReplyItem color="blue" size="100px" key={i} {...item} />
          ))}
        </QuickReplyContainer>
      ) : null}
      <ChatInput onDoubleClick={props.onDoubleClick} />
    </Wrapper>
  );
};

ChatInputContainer.defaultProps = {
  displayQuickReplies: false,
};

const mapStateToProps = (state) => {
  const { quickReply } = state;
  return {
    displayQuickReplies: quickReply.displayQuickReply,
    value: quickReply.value,
  };
};

export default connect(mapStateToProps, null)(ChatInputContainer);
