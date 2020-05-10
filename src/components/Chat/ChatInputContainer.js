import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Collapse } from "reactstrap";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

import ChatInput from "./ChatInput";
import InlineController from "./InlineController";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 1rem 2.5rem;
  background-color: #f8f8f8;
  z-index: 3;
  @media (max-width: 36rem) {
    padding: 1rem;
  }
`;

const QuickReplyContainer = styled(Collapse)`
  scroll-snap-type: x mandatory;
  overflow-x: auto;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  &:after {
    content: "";
    padding-right: 1rem;
  }
  & > div {
    scroll-snap-align: center;
  }
  @media (max-width: 992px) {
    justify-content: flex-start;
  }
`;

const Toggler = styled.span`
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
`;

const ChatInputContainer = (props) => {
  const { isOpen, toggler } = props;
  return (
    <Wrapper>
      {props.displayQuickReply ? (
        <>
          <QuickReplyContainer isOpen={isOpen}>
            <InlineController type={props.type} data={props.value} />
          </QuickReplyContainer>
          <Toggler onClick={() => toggler()}>
            {isOpen ? <FaChevronDown /> : <FaChevronUp />}
          </Toggler>
        </>
      ) : null}
      <ChatInput onDoubleClick={props.onDoubleClick} />
    </Wrapper>
  );
};

// ChatInputContainer.defaultProps = {
//   displayQuickReply: false,
// };

const mapStateToProps = (state) => {
  return state.quickReply;
};

export default connect(mapStateToProps, null)(ChatInputContainer);
