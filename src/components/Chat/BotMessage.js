import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BotImg from "../../images/6.png";

const ChatContainer = styled.div`
  display: flex;
  margin: 0.75rem 0;
`;

const ChatImg = styled.img`
  align-self: flex-end;
  width: 80px;
  border-radius: 50%;
  margin-right: 1.25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 75px;
    margin-right: 1rem;
  }
  @media (max-width: 576px) {
    width: 50px;
    margin-right: 0.5rem;
  }
`;

const ChatTextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
`;

const ChatText = styled.div`
  align-self: flex-start;
  background-color: rgb(221, 242, 255);
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 10px 20px;
  box-shadow: 0 2px 5px -2px rgba(0, 100, 162, 0.3);
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const BotMessage = (props) => {

  let { queryResult } = props;

  return (
    <ChatContainer>
      <ChatImg src={BotImg} alt="bot" />
      <ChatTextContainer>
        {queryResult.map((botRes, index) => {
          return (
            <ChatText key={index}> {botRes}</ChatText>
          );
        })}
      </ChatTextContainer>
    </ChatContainer>
  );
};

BotMessage.propTypes = {
  queryResult: PropTypes.array.isRequired
};

export default BotMessage;
