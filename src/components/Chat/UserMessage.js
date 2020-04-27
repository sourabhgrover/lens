import React from "react";

class UserMessage extends React.Component {
    render() {
        return (<div className="d-flex justify-content-end mb-4">
            <div className="msg_cotainer_send">
                {this.props.userMessage}
            </div>
            <div className="img_cont_msg">
                <img src="img/user.svg" className="rounded-circle user_img_msg " alt="User" />
            </div>
        </div>)
    }
}

export default UserMessage;