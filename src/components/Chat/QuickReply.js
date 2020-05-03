import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Color from "color";

const Box = styled.div`
  height: 150px;
  min-width: 150px;
  margin: 1rem;
  background-color: #fff;
  color: ${(props) => props.color};
  box-shadow: 0 0 5px 2px
    ${(props) => Color(props.color).darken(0.1).alpha(0.5)};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const QuickReply = ({ color, size, icon, text, onClick }) => {
  return (
    <Box onClick={onClick} color={color} size={size}>
      <Img src={icon} alt={text} />
      <Text>{text}</Text>
    </Box>
  );
};

QuickReply.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string,
  onClick: PropTypes.func,
};

QuickReply.defaultProps = {
  size: "125px",
};

export default QuickReply;
