import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sendUserMessage } from "../../redux/actions/chatAction";

const Container = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  margin: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 0.5rem rgba(102, 16, 242, 0.5);
  cursor: pointer;
  user-select: none;
  &:active,
  &:focus {
    box-shadow: 0 0 0.25rem rgba(102, 16, 242, 0.5);
  }
`;

const Text = styled.p`
  min-width: 100px;
  flex-grow: 1;
  font-family: "Proxima Bold";
  white-space: nowrap;
  text-align: center;
  margin-bottom: 0;
`;

const TextQuickReplyItem = ({ data, messageToBot }) => {
  const dispatch = useDispatch();
  const sendMessage = () => {
    dispatch(sendUserMessage(messageToBot));
    // this.props.sendUserMessage(this.state.userEnteredMessage);
    // this.setState({ userEnteredMessage: '' });
  };
  return (
    <Container>
      <Text onClick={sendMessage}>{data}</Text>
    </Container>
  );
};

TextQuickReplyItem.propTypes = {
  data: PropTypes.string.isRequired,
  messageToBot: PropTypes.string.isRequired,
};

export default TextQuickReplyItem;
