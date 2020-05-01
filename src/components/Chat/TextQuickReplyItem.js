import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 1rem 1.5rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  user-select: none;
  &:active,
  &:focus {
    box-shadow: 0 0.075rem 0.125rem rgba(0, 0, 0, 0.25);
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
  return (
    <Container>
      <Text>{data}</Text>
    </Container>
  );
};

TextQuickReplyItem.propTypes = {
  data: PropTypes.string.isRequired,
  messageToBot: PropTypes.string.isRequired,
};

export default TextQuickReplyItem;
