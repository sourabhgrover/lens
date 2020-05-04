import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import Layout from "./Layout";
import Intent from "./Intent";
import Persona from "./Persona";
import Tone from "./Tone";
import Phrases from "./Phrases";

import KeyboardMicButton from "./KeyboardMicButton";
import InlineQuickReply from "./InlineQuickReply";

import VerticalBarChart from "../Charts/VerticalBarChart"
import HorizontalBarChart from "../Charts/HorizontalBarChart"
import CustomPieChart from "../Charts/CustomPieChart"
import CustomLineChart from "../Charts/CustomLineChart"

const Summary = (props) => {
  return (
    <Layout>
      <Container fluid className="py-3">
        <div className="text-center mt-3">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <Tone />
            </Col>
            <Col xs={12} md={6}>
              <Intent />
            </Col>
            <Col xs={12} md={6}>
              <Persona />
            </Col>
            <Col xs={12} md={6}>
              <Phrases />
            </Col>
            <Col xs={12} md={6}>
              <CustomLineChart />
            </Col>

            <Col xs={12} md={6}>
              <VerticalBarChart />
            </Col>
            <Col xs={12} md={6}>
              <HorizontalBarChart />
            </Col>
            <Col xs={12} md={6}>
              <CustomPieChart />
            </Col>


          </Row>
        </Container>
        <Container>
          <InlineQuickReply />
        </Container>
        <KeyboardMicButton />
      </Container>
    </Layout>
  );
};

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Summary.defaultProps = {
  title: "Hello John! I can help you with the product details",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
};

export default Summary;
