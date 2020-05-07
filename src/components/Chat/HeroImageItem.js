import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, CardImg, CardText, CardBody, CardSubtitle } from "reactstrap";

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:active,
  &:focus {
    box-shadow: 0 0.075rem 0.125rem rgba(0, 0, 0, 0.25);
  }
`;

const StyledImage = styled(CardImg)`
  object-fit: cover;
  height: 25vh;
`;

const Title = styled.h4`
  font-family: "Proxima Bold";
`;

const HeroImageItem = ({ title, subtitle, imageUrl, description }) => {
  return (
    <StyledCard>
      <StyledImage top width="100%" src={imageUrl} />
      <CardBody>
        <Title>{title}</Title>
        <CardSubtitle className="text-secondary">{subtitle}</CardSubtitle>
        <CardText className="mt-2">{description}</CardText>
      </CardBody>
    </StyledCard>
  );
};

HeroImageItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HeroImageItem;
