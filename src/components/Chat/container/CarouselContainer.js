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
  let typeSet = 4;
  switch (type) {
    case "hero":
      typeSet = 3;
      break;
    case "qr-image":
      typeSet = 5;
      break;
    default:
      break;
  }
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
              slidesToShow: typeSet - 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: typeSet - 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: typeSet - 3 === 0 ? typeSet - 3 : 1,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
        slidesToShow={typeSet}
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
