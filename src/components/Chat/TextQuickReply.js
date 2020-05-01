import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TextQuickReplyItem from "./TextQuickReplyItem";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  padding: 10px;
  overflow-x: auto;
  ${"" /* This is an issue in browser rendering.
    The dreadful overflow:scroll and padding-right.
    So using a pseudo element to render right padding.
   */}
  &::after {
    content: "";
    padding-right: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;


const TextQuickReply = ({ title, type, value }) => {
    return (
        <Wrapper>
            {
                value.map((_value, i) => <TextQuickReplyItem key={i} {..._value} ></TextQuickReplyItem>)

            }
        </Wrapper>
    );
};

TextQuickReply.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.array,
}

export default TextQuickReply;
