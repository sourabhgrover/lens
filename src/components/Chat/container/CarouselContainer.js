import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

const Wrapper = styled.div`
  height: inherit;
  width: 100%;
  margin: 2rem 0 1rem 0;
`;

const CarouselContainer = ({ children, variable = false, type }) => {
  return (
    <Wrapper>
      <Slider
        dots={false}
        draggable={true}
        infinite={false}
        responsive={[
          {
            breakpoint: 992,
            settings: {
              slidesToShow: type === "hero" ? 3 : 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: type === "hero" ? 2 : 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: type === "hero" ? 1 : 2,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        slidesToShow={type === "hero" ? 3 : 5}
        swipeToSlide={true}
        variableWidth={variable}
        nextArrow={<FaAngleDoubleRight />}
        prevArrow={<FaAngleDoubleLeft />}
      >
        {children}
      </Slider>
    </Wrapper>
  );
};

CarouselContainer.propTypes = {
  children: PropTypes.node.isRequired,
  variable: PropTypes.bool,
  type: PropTypes.string,
};

export default CarouselContainer;
