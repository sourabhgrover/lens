import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Carousel from "@brainhubeu/react-carousel";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import "@brainhubeu/react-carousel/lib/style.css";

const Wrapper = styled.div`
  width: 50%;
  padding: 1rem 0;
  padding-left: ${(props) => props.padding}px;
  margin: 1rem 75px;
  @media (max-width: 992px) {
    width: 60%;
  }
  @media (max-width: 768px) {
    margin: 0 70px;
    width: 75%;
  }
  @media (max-width: 576px) {
    margin: 0 30px;
    width: calc(100% - 60px);
  }
`;

const CarouselContainer = ({ children, size, offset, padding }) => {
  return (
    <Wrapper padding={padding}>
      <Carousel
        slidesPerPage={3}
        // breakpoints={{
        //   768: { slidesPerPage: 2 },
        //   576: { slidesPerPage: 1 },
        // }}
        // arrowLeft={<FaAngleDoubleLeft />}
        // arrowLeftDisabled={<FaAngleLeft />}
        // arrowRight={<FaAngleDoubleRight />}
        // arrowRightDisabled={<FaAngleRight />}
        // addArrowClickHandler
        arrows={false}
        dots
        itemWidth={size}
        offset={offset}
      >
        {children}
      </Carousel>
    </Wrapper>
  );
};

CarouselContainer.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
  offset: PropTypes.number,
  padding: PropTypes.number,
};

export default CarouselContainer;
