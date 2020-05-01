import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Color from "color";
import { IconContext } from "react-icons";

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

const Text = styled.span`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const TextQuickReply = (props) => {
    return (
        <Box color={props.color} size={props.size}>
            <span>
                <IconContext.Provider value={{ color: props.color, size: "2rem" }}>
                    {props.icon}
                </IconContext.Provider>
            </span>
            <Text>{props.text}</Text>
        </Box>
    );
};

TextQuickReply.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string,
};

TextQuickReply.defaultProps = {
    size: "125px",
};

export default TextQuickReply;
