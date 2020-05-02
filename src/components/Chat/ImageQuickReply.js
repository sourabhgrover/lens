import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageQuickReplyItem from "./ImageQuickReplyItem";
import { Container, Row, Col } from "reactstrap";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  padding: 10px;
  overflow-x: auto;
  ${"" /* This is an issue in browser rendering.
    The dreadful overflow:scroll and padding-right.
    So using a pseudo element to render right padding.
   */}
  &::after {
    content: "";
    padding-right: 10px;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;


const ImageQuickReply = ({ title, type, value }) => {
  return (

    <Container className="w-75 ml-5 ml-sm-0">
      <Row>

        {
          value.map((_value, i) => <ImageQuickReplyItem color="blue" key={i} {..._value} />)

        }


      </Row>
    </Container >
  );
};

ImageQuickReply.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.array,
}

export default ImageQuickReply;
