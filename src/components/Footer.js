import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  margin-bottom: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return <StyledFooter>Created by polynomial.ai</StyledFooter>;
};

export default Footer;
