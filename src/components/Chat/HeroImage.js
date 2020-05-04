import React from "react";
import PropTypes from "prop-types";
import HeroImageItem from "./HeroImageItem";
import CarouselContainer from "./container/CarouselContainer";

const HeroImage = ({ value }) => {
  return (
    <CarouselContainer type="hero">
      {value.map((item, i) => {
        return <HeroImageItem key={i} {...item} />;
      })}
    </CarouselContainer>
  );
};

HeroImage.propTypes = {
  value: PropTypes.array.isRequired,
};

export default HeroImage;
