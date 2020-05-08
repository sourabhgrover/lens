import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  margin-bottom: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0.25rem 1rem;
  font-size: 1rem;
  z-index: 3;
`;

const Footer = () => {
  return <StyledFooter>Created by polynomial.ai</StyledFooter>;
};

export default Footer;
