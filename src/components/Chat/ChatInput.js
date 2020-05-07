import React from "react";
import styled from "styled-components";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { IconContext } from "react-icons";
import {
  FaRedo,
  FaPaperPlane,
  FaMicrophoneAlt,
  FaAssistiveListeningSystems,
} from "react-icons/fa";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import { sendUserMessage, deleteChat } from "../../redux/actions/chatAction";
import { FIRST_MESSAGE } from "../../utils/const";

const ButtonColor = `#393939`;
const Border = `1px solid ${ButtonColor}`;

const Wrapper = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  border-radius: 50px;
`;

const StyledInput = styled(Input)`
  border: ${Border};
  &:focus {
    box-shadow: inset 0 0 0 ${ButtonColor};
    border-color: ${ButtonColor};
    z-index: 1 !important;
  }
`;

const BaseButton = styled(Button)`
  background-color: #fff;
  border: ${Border};
  &:hover {
    background-color: #fff;
  }
  &:active,
  &:focus {
    background-color: #fff;
    box-shadow: none !important;
    border-color: ${ButtonColor} !important;
  }
  &:active {
    background-color: #ccc !important;
  }
`;

const SendButton = styled(BaseButton)`
  border-left: 0px;
`;

const ResetButton = styled(BaseButton)`
  border-radius: 50px 0 0 50px !important;
`;

const SpeakButton = styled(BaseButton)`
  border-radius: 0 50px 50px 0 !important;
`;

// Find out if SpeechRecognition exists in the browser window
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

// Initialize the API if exists, else set it to null
const recognition =
  SpeechRecognition === undefined ? null : new SpeechRecognition();

class ChatInput extends React.Component {
  constructor(props) {
    super(props);
    // Intialize state
    this.state = { userEnteredMessage: "", listening: false, supported: false };
  }

  componentDidMount() {
    // Check the `recognition` variable and set support accordingly.
    if (recognition === null) {
      console.log(recognition);
      this.setState({ supported: false });
    } else {
      this.setState({ supported: true });
    }
  }

  handleListen = () => {
    // If the API is supported on the browser
    if (this.state.supported) {
      if (this.state.listening) {
        // If already listening, stop the speech recognition
        this.setState({ listening: false }, recognition.stop());
      } else {
        // Otherwise, start listening for speech
        this.setState({ listening: true });
        recognition.start();
        recognition.onstart = () => console.log("Voice activated");
        recognition.onresult = (e) => {
          // Get the speech result of highest confidence and set it to input bar
          const result = e.results[e.resultIndex][0].transcript.trim();
          this.setState({ userEnteredMessage: result });
        };
        // When speech ends, automatically stop the recognition
        recognition.onspeechend = () => {
          console.log("Voice stopped");
          this.setState({ listening: false }, recognition.stop());
        };
      }
      // If not supported, display an alert
    } else {
      alert("Sorry, WebSpeechAPI currently works only on Chrome and Edge.");
    }
  };

  // Handle Validation
  handleValidation() {
    let userEnteredMessage = this.state.userEnteredMessage;
    let formIsValid = true;
    //Check if message is empty or not
    if (!userEnteredMessage) {
      formIsValid = false;
    }
    return formIsValid;
  }

  // Reset Chat
  resetChat = () => {
    this.props.deleteChat();
    this.props.sendUserMessage(FIRST_MESSAGE);
  };
  // Send Message on submit
  onSubmit = () => {
    if (this.handleValidation()) {
      this.callSendMessageAction();
    }
  };
  // Send Message on Enter
  _handleKeyDown = (e) => {
    if (e.key === "Enter" && this.handleValidation()) {
      this.callSendMessageAction();
    }
  };

  callSendMessageAction() {
    this.props.sendUserMessage(this.state.userEnteredMessage);
    this.setState({ userEnteredMessage: "" });
    if (this.props.location.pathname === '/summary') {
      this.props.history.push("/chat");
    }
  }
  render() {
    return (
      <Wrapper>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend" onClick={this.resetChat}>
            <ResetButton>
              <IconContext.Provider value={{ color: ButtonColor }}>
                <FaRedo />
              </IconContext.Provider>
            </ResetButton>
          </InputGroupAddon>
          <StyledInput
            type="text"
            value={this.state.userEnteredMessage}
            onChange={(e) =>
              this.setState({ userEnteredMessage: e.target.value })
            }
            placeholder="Type here... "
            onKeyDown={this._handleKeyDown}
            onDoubleClick={this.props.onDoubleClick}
          />
          <InputGroupAddon addonType="append">
            <SendButton onClick={this.onSubmit}>
              <IconContext.Provider value={{ color: ButtonColor }}>
                <FaPaperPlane />
              </IconContext.Provider>
            </SendButton>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <SpeakButton onClick={() => this.handleListen()}>
              <IconContext.Provider value={{ color: ButtonColor }}>
                {this.state.listening ? (
                  <FaAssistiveListeningSystems />
                ) : (
                    <FaMicrophoneAlt />
                  )}
              </IconContext.Provider>
            </SpeakButton>
          </InputGroupAddon>
        </InputGroup>
      </Wrapper>
    );
  }
}

export default withRouter(connect(null, { sendUserMessage, deleteChat })(ChatInput));
