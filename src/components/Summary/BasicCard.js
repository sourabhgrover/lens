import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const Title = styled.h3`
  text-align: center;
  padding: 1rem;
`;

const Separtor = styled.hr`
  width: 100%;
  margin-top: -1rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1.5rem;
`;

const BasicCard = ({ children, title }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Separtor />
      <Content>{children}</Content>
    </Card>
  );
};

BasicCard.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default BasicCard;
