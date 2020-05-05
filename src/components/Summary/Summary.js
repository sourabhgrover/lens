import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import _ from "lodash";

import { sendSummaryMessage, clearSummary } from "../../redux/actions/summaryAction";
import { SUMMARY_MESSAGE, DOUGHNUT_CHART, VERTICAL_BAR_CHART, HORIZONTAL_BAR_CHART, LINE_CHART } from "../../utils/const"

import Layout from "./Layout";


import KeyboardMicButton from "./KeyboardMicButton";
import InlineQuickReply from "./InlineQuickReply";

import VerticalBarChart from "../Charts/VerticalBarChart"
import HorizontalBarChart from "../Charts/HorizontalBarChart"
import CustomPieChart from "../Charts/CustomPieChart"
import CustomLineChart from "../Charts/CustomLineChart"

const Summary = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sendSummaryMessage(SUMMARY_MESSAGE))
    return () => {
      dispatch(clearSummary())
    }
  }, []);
  const summaryData = useSelector(state => {
    console.log(state)
    return state.summary
  });
  console.log(summaryData);

  const charts = summaryData[0]?.attachment[0]?.value[0]?.views;


  const renderChart = () => {
    return (
      charts.map(singleChart => {

        switch (singleChart?.viewType) {
          case DOUGHNUT_CHART:
            return (
              <Col xs={12} md={6}>
                <CustomPieChart {...singleChart} />
              </Col>
            )
          case VERTICAL_BAR_CHART:
            return (
              <Col xs={12} md={6}>
                <VerticalBarChart {...singleChart} />
              </Col>
            )
          case HORIZONTAL_BAR_CHART:
            return (
              <Col xs={12} md={6}>
                <HorizontalBarChart {...singleChart} />
              </Col>
            )
          case LINE_CHART:
            return (
              <Col xs={12} md={6}>
                <CustomLineChart {...singleChart} />
              </Col>
            )
          default:
            return null;
        }
      })
    );
  }
  return (
    <Layout>
      <Container fluid className="py-3">
        <div className="text-center mt-3">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <Container>
          <Row>
            {/* <Col xs={12} md={6}>
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
            </Col> */}


            {
              (charts === undefined) ? '' : renderChart()
            }

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
