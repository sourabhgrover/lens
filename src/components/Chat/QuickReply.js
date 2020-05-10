import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Box = styled.div`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  margin: 1rem;
  background-color: #fff;
  color: ${(props) => props.color};
  box-shadow: 0 0 3px 1px ${(props) => props.color};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  display: block;
  width: 50px;
  margin: 0 auto;
  align-self: center;
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 10px;
`;

const QuickReply = ({ color, size, image, text, onClick }) => {
  return (
    <Box onClick={onClick} color={color} size={size}>
      <Img src={image} alt={text} />
      <Text>{text}</Text>
    </Box>
  );
};

QuickReply.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

QuickReply.defaultProps = {
  color: "#407294",
  size: "125px",
};

export default QuickReply;
