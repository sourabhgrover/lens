import React from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 2.5rem;
  background-color: #f8f8f8;
  @media (max-width: 36rem) {
    padding: 1rem;
  }
`;

const ChatInputContainer = () => {
  return (
    <Wrapper>
      <ChatInput />
    </Wrapper>
  );
};

export default ChatInputContainer;
