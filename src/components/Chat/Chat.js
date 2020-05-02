import React from 'react';
import styled from "styled-components";

import ChatHeader from "./ChatHeader";
import ChatInputContainer from "./ChatInputContainer";
import ChatContent from "./ChatContent";
import Footer from "../Footer";


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
                <ChatContent />
                <div>
                    <ChatInputContainer />
                    <Footer />
                </div>
            </Wrapper>

        );
    }
}

export default Chat;