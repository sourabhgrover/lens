import React from "react";

class ChatFooter extends React.Component {
    state = { userEnteredMessage: '' }
    onSubmit = () => {
        this.props.onUserMessageSubmit(this.state.userEnteredMessage);
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
                    <textarea name="userEnteredMessage" className="form-control type_msg" placeholder="Type your message..." onChange={this.handleChange}></textarea>
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

export default ChatFooter;