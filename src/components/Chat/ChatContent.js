import React from "react";

class ChatContent extends React.Component {

    state = {
        sessionId: "",
        responseId: "",
        queryResult: ""
    }
    render() {
        return (
            <div className="card-body msg_card_body">
                <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src="img/bot.svg" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                        Hi, how are you samim?
                    </div>

                </div>
                <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                        Hi Khalid i am good tnx how about you?
									<span className="msg_time_send">8:55 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                        <img src="img/user.svg" className="rounded-circle user_img_msg" />
                    </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src="img/bot.svg" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                        I am good too, thank you for your chat template
									<span className="msg_time">9:00 AM, Today</span>
                    </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                        You are welcome
									<span className="msg_time_send">9:05 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                        <img src="img/user.svg" className="rounded-circle user_img_msg" />
                    </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src="img/bot.svg" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                        I am looking for your next templates
									<span className="msg_time">9:07 AM, Today</span>
                    </div>
                </div>
                <div className="d-flex justify-content-end mb-4">
                    <div className="msg_cotainer_send">
                        Ok, thank you have a good day
									<span className="msg_time_send">9:10 AM, Today</span>
                    </div>
                    <div className="img_cont_msg">
                        <img src="img/user.svg" className="rounded-circle user_img_msg" />
                    </div>
                </div>
                <div className="d-flex justify-content-start mb-4">
                    <div className="img_cont_msg">
                        <img src="img/bot.svg" className="rounded-circle user_img_msg" />
                    </div>
                    <div className="msg_cotainer">
                        Bye, see you
									<span className="msg_time">9:12 AM, Today</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatContent;