import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import UserImg from "../../images/5.png";

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0.5rem 0;
`;

const ChatImg = styled.img`
  order: 1;
  width: 80px;
  border-radius: 50%;
  margin-left: 1.25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 75px;
    margin-left: 1rem;
  }
  @media (max-width: 552px) {
    width: 50px;
    margin-left: 0.5rem;
  }
`;

const ChatText = styled.div`
  background-color: rgb(94, 158, 235);
  color: white;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px -2px rgba(0, 100, 162, 0.3);
`;

const UserMessage = (props) => {
    return (
        <ChatContainer>
            <ChatImg src={UserImg} alt="user" />
            <ChatText>{props.userMessage}</ChatText>
        </ChatContainer>
    );
};

UserMessage.propTypes = {
    userMessage: PropTypes.string.isRequired,
};

export default UserMessage;
