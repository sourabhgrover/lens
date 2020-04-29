import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
// import InlineQuickReply from "../containers/InlineQuickReply";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 1rem 2.5rem;
  background-color: #f8f8f8;
  @media (max-width: 36rem) {
    padding: 1rem;
  }
`;

const ChatInputContainer = () => {
  return (
    <Wrapper>
      {/* <InlineQuickReply /> */}
      <ChatInput />
    </Wrapper>
  );
};

export default ChatInputContainer;
