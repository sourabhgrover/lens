import React from "react";
import PropTypes from "prop-types";
import ImageQuickReplyItem from "./ImageQuickReplyItem";
import CarouselContainer from "./container/CarouselContainer";

const ImageQuickReply = ({ title, type, value }) => {
  return (
    <CarouselContainer>
      {value.map((_value, i) => (
        <ImageQuickReplyItem color="blue" key={i} {..._value} />
      ))}
    </CarouselContainer>
  );
};

ImageQuickReply.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.array,
};

export default ImageQuickReply;
