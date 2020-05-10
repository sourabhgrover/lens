import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { sendUserMessage } from "../../redux/actions/chatAction";

import { IMG_SRC_URL, IMG_SRC_FILE } from "../../utils/const";
import { HIDE_QR_CARDS } from "../../redux/actions/type";

const ImgPath = "/img/";

const Box = styled(({ size, ...rest }) => <div {...rest} />)`
  height: ${(props) => props.size};
  width: ${(props) => props.size};
  margin: 1rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:nth-child(1) {
    color: #00ee5f;
    box-shadow: 0 0 5px 2px #e3f2e9;
  }
  &:nth-child(2) {
    color: #0035ef;
    box-shadow: 0 0 5px 2px #d2dcff;
  }
  &:nth-child(3) {
    color: #edbc00;
    box-shadow: 0 0 5px 2px #fbedb7;
  }
  &:nth-child(4) {
    color: #5c6bce;
    box-shadow: 0 0 5px 2px #bfc8ff;
  }
  &:nth-child(5) {
    color: #ef2000;
    box-shadow: 0 0 5px 2px #ffd9d3;
  }
`;

const Img = styled.img`
  display: block;
  width: 50px;
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
  size = "125px",
}) => {
  const dispatch = useDispatch();
  return (
    <Box
      color={color}
      size={size}
      onClick={() => {
        dispatch(sendUserMessage(messageToBot));
        dispatch({ type: HIDE_QR_CARDS });
      }}
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
