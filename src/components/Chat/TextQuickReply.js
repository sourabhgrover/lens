import React from "react";
import PropTypes from "prop-types";
import TextQuickReplyItem from "./TextQuickReplyItem";
import CarouselContainer from "./container/CarouselContainer";


const TextQuickReply = ({ title, type, value }) => {
    return (
        <CarouselContainer size={200} offset={50}>
            {
                value.map((_value, i) => <TextQuickReplyItem key={i} {..._value} ></TextQuickReplyItem>)

            }
        </CarouselContainer>
    );
};

TextQuickReply.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.array,
}

export default TextQuickReply;
