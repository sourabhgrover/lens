import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Card = styled(({ borderColor, backgroundColor, ...rest }) => (
  <div {...rest} />
))`
  width: 100%;
  margin: 1rem 0rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: 0 0.125rem 0.25rem ${(props) => props.borderColor};
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
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  margin: 1rem;
`;



const ChartContainer = (props) => {
  return (
    <Card
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
    >
      <Title>{props.title}</Title>
      <Separtor />
      <Content>{props.children}</Content>
    </Card>
  );
};

ChartContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ChartContainer.defaultProps = {
  borderColor: "rgba(0, 0, 0, 0.25)",
  backgroundColor: "#fff",
};

export default ChartContainer;
