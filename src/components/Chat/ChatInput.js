import React from "react";
import styled from "styled-components";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { IconContext } from "react-icons";
import { FaRedo, FaPaperPlane, FaMicrophoneAlt } from "react-icons/fa";
import { connect } from "react-redux";

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

class ChatInput extends React.Component {


  state = { userEnteredMessage: '' };

  resetChat = () => {
    this.props.deleteChat();
    this.props.sendUserMessage(FIRST_MESSAGE);
  }
  onSubmit = () => {
    this.props.sendUserMessage(this.state.userEnteredMessage);
    this.setState({ userEnteredMessage: '' });
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
            onChange={(e) => this.setState({ userEnteredMessage: e.target.value })}
            placeholder="Type here... "
          />
          <InputGroupAddon addonType="append">
            <SendButton onClick={this.onSubmit}>
              <IconContext.Provider value={{ color: ButtonColor }}>
                <FaPaperPlane />
              </IconContext.Provider>
            </SendButton>
          </InputGroupAddon>
          <InputGroupAddon addonType="append">
            <SpeakButton>
              <IconContext.Provider value={{ color: ButtonColor }}>
                <FaMicrophoneAlt />
              </IconContext.Provider>
            </SpeakButton>
          </InputGroupAddon>
        </InputGroup>
      </Wrapper >
    );
  }
};

export default connect(null, { sendUserMessage, deleteChat })(ChatInput);
