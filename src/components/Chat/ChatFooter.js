import React from "react";
import { connect } from "react-redux";

import { sendUserMessage } from "../../redux/actions/chatAction";

class ChatFooter extends React.Component {
    state = { userEnteredMessage: '' }
    onSubmit = () => {
        this.props.sendUserMessage(this.state.userEnteredMessage);
        this.setState({ userEnteredMessage: '' });
    }

    handleChange = (event) => {
        this.setState({ userEnteredMessage: event.target.value });
    }
    render() {
        return (
            <div className="card-footer">
                <div className="input-group">
                    <div className="input-group-append">
                        <span className="input-group-text attach_btn"><i className="fas fa-redo"></i></span>
                    </div>
                    <textarea name="userEnteredMessage" className="form-control type_msg" placeholder="Type your message..." onChange={this.handleChange} value={this.state.userEnteredMessage} ></textarea>
                    <div className="input-group-append">
                        <span className="input-group-text send_btn" onClick={this.onSubmit}>
                            <i className="fas fa-location-arrow"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, { sendUserMessage })(ChatFooter);