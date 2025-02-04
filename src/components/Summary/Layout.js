import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "../Chat/ChatHeader";
import Footer from "../Footer";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin-top: 51.6px;
  & > * {
    flex-shrink: 0;
  }
`;

const Container = styled.main`
  flex-grow: 1;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
