import React from "react";
import PropTypes from "prop-types";

import CarouselContainer from "./container/CarouselContainer";
import UploadFile from "./UploadFile";
import QuickReply from "./QuickReply";

import {
  ATTACHMENT_TYPE_QUICKREPLY_ATTACHMENT,
  ATTACHMENT_TYPE_QUICKREPLY_URL,
  ATTACHMENT_TYPE_QUICKREPLY_OPENAPP,
} from "../../utils/const";

const QuickReplyAction = (props) => {
  return (
    <CarouselContainer>
      {props.value.map((item) => {
        switch (item.action) {
          case ATTACHMENT_TYPE_QUICKREPLY_ATTACHMENT:
            return <UploadFile img={item.source} />;
          case ATTACHMENT_TYPE_QUICKREPLY_URL:
            return (
              <QuickReply
                text={item.data}
                image="https://png.pngtree.com/svg/20170410/url_650526.png"
                onClick={() => alert(`Opening URL: ${item.url}`)}
              />
            );
          case ATTACHMENT_TYPE_QUICKREPLY_OPENAPP:
            return (
              <QuickReply
                text={item.data}
                image="https://cdn1.iconfinder.com/data/icons/universal-icons-set-for-web-and-mobile/100/controls_0-28-512.png"
                onClick={() =>
                  alert(
                    `Opening App: ${item.preference.join(", ")}\nCategory: ${
                      item.category
                    }`
                  )
                }
              />
            );
          default:
            return null;
        }
      })}
    </CarouselContainer>
  );
};

QuickReplyAction.propTypes = {
  value: PropTypes.array.isRequired,
};

export default QuickReplyAction;
