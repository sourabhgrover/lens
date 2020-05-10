import React from "react";
import styled from "styled-components";

import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import TextBar from "../Summary/TextBar";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > * {
    flex-shrink: 0;
  }
`;

class Chat extends React.Component {
  render() {
    return (
      <Wrapper>
        <ChatHeader />
        <ChatContent history={this.props.location.state} />
        <TextBar history={this.props.location.state} />
      </Wrapper>
    );
  }
}

export default Chat;
