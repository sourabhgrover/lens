import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sendUserMessage } from "../../redux/actions/chatAction";
import Color from "color";

import { IMG_SRC_URL, IMG_SRC_FILE } from "../../utils/const";

const ImgPath = "/img/";
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

const Img = styled.img`
  display: block;
  width: 75px;
  margin: 0 auto;
  align-self: center;
  @media (max-width: 768px) {
    width: 60px;
  }
  @media (max-width: 576px) {
    width: 50px;
  }
`;

const Text = styled.span`
  text-align: center;
  font-size: 0.875rem;
  margin-top: 5px;
`;

const ImageQuickReplyItem = ({
  source,
  imageSource,
  data: messageFromBot,
  messageToBot,
  color,
}) => {
  let size = 125;
  const dispatch = useDispatch();
  return (
    <Box
      color={color}
      size={size}
      onClick={() => dispatch(sendUserMessage(messageToBot))}
    >
      <span>
        {imageSource === IMG_SRC_URL ? (
          <Img src={source} alt="Quick Reply Icon" />
        ) : (
          ""
        )}

        {imageSource === IMG_SRC_FILE ? (
          <Img src={`${ImgPath}${source}.png`} alt="Quick Reply Icon" />
        ) : (
          ""
        )}
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
