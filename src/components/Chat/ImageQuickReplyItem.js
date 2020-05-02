import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sendUserMessage } from "../../redux/actions/chatAction";
import Color from "color";

import { IMG_SRC_URL, IMG_SRC_FILE } from "../../utils/const"

const ImgPath = '/img/';
const Box = styled.div`
  height: 150px;
  min-width: 150px;
  margin: 1rem;
  background-color: #fff;
  color: ${(props) => props.color};
  box-shadow: 0 0 5px 2px
    ${(props) => Color(props.color).darken(0.1).alpha(0.5)};
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 5px;
`;


const ImageQuickReplyItem = ({ source, imageSource, data: messageFromBot, messageToBot, color }) => {
  let size = 125
  const dispatch = useDispatch();
  return (
    <Box color={color} size={size} onClick={() => dispatch(sendUserMessage(messageToBot))} >
      <span>
        {(imageSource === IMG_SRC_URL) ? <img src={`${source}`} alt="Image" /> : ''}

        {(imageSource === IMG_SRC_FILE) ? <img src={`${ImgPath}${source}.png`} alt="Image" /> : ''}
      </span>
      <Text>{messageFromBot}</Text>
    </Box>

  );
};

// ImageQuickReplyItem.propTypes = {
//   data: PropTypes.string.isRequired,
//   messageToBot: PropTypes.string.isRequired,
// };



export default ImageQuickReplyItem;
