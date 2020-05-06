import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";


import { sendSummaryMessage, clearSummary } from "../../redux/actions/summaryAction";
import { SUMMARY_MESSAGE, DOUGHNUT_CHART, VERTICAL_BAR_CHART, HORIZONTAL_BAR_CHART, LINE_CHART } from "../../utils/const"


import ChatInputContainer from "../Chat/ChatInputContainer";
import SummaryContent from "./SummaryContent";
import ChatHeader from "../Chat/ChatHeader";


import KeyboardMicButton from "./KeyboardMicButton";
import InlineQuickReply from "./InlineQuickReply";

import VerticalBarChart from "../Charts/VerticalBarChart"
import HorizontalBarChart from "../Charts/HorizontalBarChart"
import CustomDoughNutChart from "../Charts/CustomDoughNutChart"
import CustomLineChart from "../Charts/CustomLineChart"
import SummaryFooter from "./SummaryFooter"

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > * {
    flex-shrink: 0;
  }
`;

const Summary = () => {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(sendSummaryMessage(SUMMARY_MESSAGE))
  //   return () => {
  //     dispatch(clearSummary())
  //   }
  // }, []);

  // const summaryData = useSelector(state => {
  //   return state.summary
  // });

  // console.log(summaryData);



  // const charts = summaryData[0]?.attachment[0]?.value[0]?.views;
  // const { title, description } = summaryData[0]?.attachment[0]?.value[0];


  // const renderChart = () => {
  //   return (

  //     charts.map((singleChart, i) => {

  //       switch (singleChart?.viewType) {
  //         case DOUGHNUT_CHART:
  //           return (
  //             <Col xs={12} md={6} key={i}>
  //               <CustomDoughNutChart {...singleChart} />
  //             </Col>
  //           )
  //         case VERTICAL_BAR_CHART:
  //           return (
  //             <Col xs={12} md={6} key={i}>
  //               <VerticalBarChart {...singleChart} />
  //             </Col>
  //           )
  //         case HORIZONTAL_BAR_CHART:
  //           return (
  //             <Col xs={12} md={6} key={i}>
  //               <HorizontalBarChart {...singleChart} />
  //             </Col>
  //           )
  //         case LINE_CHART:
  //           return (
  //             <Col xs={12} md={6} key={i}>
  //               <CustomLineChart {...singleChart} />
  //             </Col>
  //           )
  //         default:
  //           return null;
  //       }
  //     })
  //   );
  // }


  return (
    <Wrapper>
      <ChatHeader />
      <SummaryContent />
      <SummaryFooter />
    </Wrapper>

  );
};

export default Summary;
