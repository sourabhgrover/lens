import React from "react";
import styled from "styled-components";
import {
  FaClipboardList,
  FaBoxOpen,
  FaGlobeAsia,
  FaWineBottle,
  FaVenusMars,
  FaComments,
} from "react-icons/fa";

import QuickReply from "./QuickReply";

const Container = styled.div`
  display: flex;
  min-width: 100%;
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
  & > * {
    flex: 0 0 150px;
  }
`;

const InlineQuickReply = () => {
  return (
    <Container>
      <QuickReply
        icon={<FaClipboardList />}
        text="Summary Details"
        color="lightblue"
      />

      <QuickReply
        icon={<FaBoxOpen />}
        text="How many beauty products sold overall?"
        color="lightgreen"
      />

      <QuickReply
        icon={<FaGlobeAsia />}
        text="Region wise data on products sold"
        color="blue"
      />

      <QuickReply
        icon={<FaWineBottle />}
        text="Top 5 beauty products"
        color="yellowgreen"
      />

      <QuickReply
        icon={<FaVenusMars />}
        text="Gender wise data on products sold"
        color="purple"
      />

      <QuickReply
        icon={<FaComments />}
        text="Review feedback of the products"
        color="red"
      />
      <QuickReply
        icon={<FaClipboardList />}
        text="Summary Details"
        color="lightblue"
      />

      <QuickReply
        icon={<FaBoxOpen />}
        text="How many beauty products sold overall?"
        color="lightgreen"
      />
    </Container>
  );
};

export default InlineQuickReply;
