import React from "react";
import DoughnutChart from "../Charts/DoughnutChart";
import BarChart from "../Charts/BarChart";
import HorizontalBarChart from "../Charts/HorizontalBarChart";
import { DOUGHNUT_CHART, BAR_CHART, HORIZONTAL_BAR_CHART } from "../../utils/const";

class BotMessage extends React.Component {

    renderAttachment(attachment) {
        let a = attachment[0].value[0].views;

        {
            if (a !== undefined) {
                {
                    return (
                        a.map((singleAttachment, index) => {
                            if (singleAttachment.viewType === DOUGHNUT_CHART) {
                                return (<DoughnutChart {...singleAttachment} key={index} />)
                            }
                            if (singleAttachment.viewType === BAR_CHART) {
                                return (<BarChart {...singleAttachment} key={index} />)
                            }
                            if (singleAttachment.viewType === HORIZONTAL_BAR_CHART) {
                                return (<HorizontalBarChart {...singleAttachment} key={index} />)
                            }
                        }))
                }
            }
        }

    }
    render() {

        let { queryResult, attachment } = this.props;
        // console.log(attachment[0].value[0].views);
        return (<div className="d-flex justify-content-start mb-4" >
            <div className="img_cont_msg">
                <img src="img/bot.svg" className="rounded-circle user_img_msg" alt="Bot" />
            </div>
            {queryResult.map((botRes, index) => {
                return (<div key={index} className="msg_cotainer">
                    {botRes}
                </div>);
            })}
            {this.renderAttachment(attachment)}

        </div >)
    }
}

export default BotMessage;