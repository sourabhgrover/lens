import React from "react";
import styled from "styled-components";

import SummaryContent from "./SummaryContent";
import ChatHeader from "../Chat/ChatHeader";
import TextBar from "./TextBar";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > * {
    flex-shrink: 0;
  }
`;

const Summary = () => {
  return (
    <Wrapper>
      <ChatHeader />
      <SummaryContent />
      <TextBar />
    </Wrapper>
  );
};

export default Summary;
