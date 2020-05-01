import React from "react";
import styled from "styled-components";
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


const TextQuickReply = (props) => {
    let { values } = props;
    return (
        <Wrapper>

            {
                values.map((_values, i) => <TextQuickReplyItem {..._values} ></TextQuickReplyItem>)

            }

        </Wrapper>
    );
};

export default TextQuickReply;
