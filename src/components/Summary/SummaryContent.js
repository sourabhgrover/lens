import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

import {
  sendSummaryMessage,
  clearSummary,
} from "../../redux/actions/summaryAction";
import {
  SUMMARY_MESSAGE,
  DOUGHNUT_CHART,
  VERTICAL_BAR_CHART,
  HORIZONTAL_BAR_CHART,
  LINE_CHART,
} from "../../utils/const";
import VerticalBarChart from "../Charts/VerticalBarChart";
import HorizontalBarChart from "../Charts/HorizontalBarChart";
import CustomDoughNutChart from "../Charts/CustomDoughNutChart";
import SummaryContentHeader from "./SummaryContentHeader";
import "./summary.css";

const Main = styled(Container)`
  margin: 5rem 0;
  flex-grow: 1;
`;
const SummaryContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendSummaryMessage(SUMMARY_MESSAGE));
    return () => {
      dispatch(clearSummary());
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  const summaryData = useSelector((state) => state.summary);

  const summaryTitle = summaryData[0]?.attachment[0]?.value[0]?.title;
  const summaryDescription =
    summaryData[0]?.attachment[0]?.value[0]?.description;
  const charts = summaryData[0]?.attachment[0]?.value[0]?.views;

  const renderChart = () => {
    return charts.map((singleChart, i) => {
      switch (singleChart?.viewType) {
        case DOUGHNUT_CHART:
          return (
            <Col lg={12} xl={6} className="d-flex" key={i}>
              <CustomDoughNutChart {...singleChart} />
            </Col>
          );
        case VERTICAL_BAR_CHART:
          return (
            <Col lg={12} xl={6} className="d-flex" key={i}>
              <VerticalBarChart {...singleChart} />
            </Col>
          );
        case HORIZONTAL_BAR_CHART:
          return (
            <Col lg={12} xl={6} className="d-flex" key={i}>
              <HorizontalBarChart {...singleChart} />
            </Col>
          );
        case LINE_CHART:
          return null;
        default:
          return null;
      }
    });
  };

  if (summaryData.length === 0 || summaryData === undefined) {
    return <div>Page is loading</div>;
  }

  return (
    <Main fluid className="pb-5 px-2 px-md-3 px-lg-5">
      <SummaryContentHeader
        title={summaryTitle}
        description={summaryDescription}
      />
      <Container>
        <Row>{charts === undefined ? "" : renderChart()}</Row>
      </Container>
    </Main>
  );
};

export default SummaryContent;
