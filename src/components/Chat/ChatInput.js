import React from "react";
import styled from "styled-components";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import { IconContext } from "react-icons";
import { FaRedo, FaPaperPlane, FaMicrophoneAlt } from "react-icons/fa";
import { connect } from "react-redux";

import { sendUserMessage } from "../../redux/actions/chatAction";

const ButtonColor = `#393939`;
const Border = `1px solid ${ButtonColor}`;

const Wrapper = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.4);
  border-radius: 50px;
`;

const StyledInput = styled(Input)`
  border: ${Border};
  border-left: 0px;
  border-right: 0px;
  &:focus,
  &:active {
    outline: none;
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
    background-color: #aaa;
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


  onSubmit = () => {
    this.props.sendUserMessage(this.state.userEnteredMessage);
    this.setState({ userEnteredMessage: '' });
  }
  render() {
    return (
      <Wrapper>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">
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

export default connect(null, { sendUserMessage })(ChatInput);
