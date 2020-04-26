import React from "react";

class BotMessage extends React.Component {
    render() {
        console.log(this.props);
        let { queryResult } = this.props;
        return (<div className="d-flex justify-content-start mb-4">
            <div className="img_cont_msg">
                <img src="img/bot.svg" className="rounded-circle user_img_msg" />
            </div>
            {queryResult.map(botRes => {
                return (<div className="msg_cotainer">
                    {botRes}
                </div>)
            })}
        </div>)
    }
}

export default BotMessage;