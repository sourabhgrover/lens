import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Slider from "react-slick";
import "./slick.min.css";
import "./slick-theme.min.css";

const Wrapper = styled.div`
  width: 100%;
  margin: 2rem 0 1rem 0;
`;

const CarouselContainer = ({ children }) => {
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
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        slidesToShow={5}
        swipeToSlide={true}
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
};

export default CarouselContainer;
