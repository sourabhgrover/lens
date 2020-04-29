// import React from "react";
// import DoughnutChart from "../Charts/DoughnutChart";
// import BarChart from "../Charts/BarChart";
// import HorizontalBarChart from "../Charts/HorizontalBarChart";
// import { DOUGHNUT_CHART, BAR_CHART, HORIZONTAL_BAR_CHART } from "../../utils/const";

// class BotMessage extends React.Component {

//     renderAttachment(attachment) {
//         let a = attachment[0].value[0].views;

//         {
//             if (a !== undefined) {
//                 {
//                     return (
//                         a.map((singleAttachment, index) => {
//                             if (singleAttachment.viewType === DOUGHNUT_CHART) {
//                                 return (<DoughnutChart {...singleAttachment} key={index} />)
//                             }
//                             if (singleAttachment.viewType === BAR_CHART) {
//                                 return (<BarChart {...singleAttachment} key={index} />)
//                             }
//                             if (singleAttachment.viewType === HORIZONTAL_BAR_CHART) {
//                                 return (<HorizontalBarChart {...singleAttachment} key={index} />)
//                             }
//                         }))
//                 }
//             }
//         }

//     }
//     render() {

//         let { queryResult, attachment } = this.props;
//         // console.log(attachment[0].value[0].views);
//         return (<div className="d-flex justify-content-start mb-4" >
//             <div className="img_cont_msg">
//                 <img src="img/bot.svg" className="rounded-circle user_img_msg" alt="Bot" />
//             </div>
//             {queryResult.map((botRes, index) => {
//                 return (<div key={index} className="msg_cotainer">
//                     {botRes}
//                 </div>);
//             })}
//             {this.renderAttachment(attachment)}

//         </div >)
//     }
// }




import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import BotImg from "../../images/6.png";

const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const ChatImg = styled.img`
  width: 80px;
  border-radius: 50%;
  margin-right: 1.25rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  @media (max-width: 768px) {
    width: 75px;
    margin-right: 1rem;
  }
  @media (max-width: 552px) {
    width: 50px;
    margin-right: 0.5rem;
  }
`;

const ChatText = styled.div`
  max-width: 50%;
  background-color: rgb(221, 242, 255);
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0 2px 5px -2px rgba(0, 100, 162, 0.3);
`;

const BotMessage = (props) => {
    //     renderAttachment(attachment) {
    //         let a = attachment[0].value[0].views;

    //         {
    //             if (a !== undefined) {
    //                 {
    //                     return (
    //                         a.map((singleAttachment, index) => {
    //                             if (singleAttachment.viewType === DOUGHNUT_CHART) {
    //                                 return (<DoughnutChart {...singleAttachment} key={index} />)
    //                             }
    //                             if (singleAttachment.viewType === BAR_CHART) {
    //                                 return (<BarChart {...singleAttachment} key={index} />)
    //                             }
    //                             if (singleAttachment.viewType === HORIZONTAL_BAR_CHART) {
    //                                 return (<HorizontalBarChart {...singleAttachment} key={index} />)
    //                             }
    //                         }))
    //                 }
    //             }
    //         }

    //     }
    let { queryResult, attachment } = props;
    return (
        <ChatContainer>
            <ChatImg src={BotImg} alt="bot" />

            {queryResult.map((botRes, index) => {
                return (
                    <ChatText key={index}> {botRes}</ChatText>
                );
            })}
        </ChatContainer>
    );
};

BotMessage.propTypes = {
    queryResult: PropTypes.array.isRequired
};

export default BotMessage;
