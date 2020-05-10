import React from "react";

import ImageQuickReplyItem from "./ImageQuickReplyItem";
import TextQuickReplyItem from "./TextQuickReplyItem";
import QuickReply from "./QuickReply";
import UploadFile from "./UploadFile";
import {
  ATTACHMENT_TYPE_QUICKREPLY_TEXT,
  ATTACHMENT_TYPE_QUICKREPLY_ACTION,
  ATTACHMENT_TYPE_QUICKREPLY_IMAGE,
  ATTACHMENT_TYPE_QUICKREPLY_ATTACHMENT,
  ATTACHMENT_TYPE_QUICKREPLY_URL,
  ATTACHMENT_TYPE_QUICKREPLY_OPENAPP,
} from "../../utils/const";

const InlineController = ({ type, data }) => {
  switch (type) {
    case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
      return data.map((item, i) => <TextQuickReplyItem key={i} {...item} />);
    case ATTACHMENT_TYPE_QUICKREPLY_ACTION:
      return data.map((item) => {
        switch (item.action) {
          case ATTACHMENT_TYPE_QUICKREPLY_URL:
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
          case ATTACHMENT_TYPE_QUICKREPLY_OPENAPP:
            return (
              <QuickReply
                text={item.data}
                image="https://png.pngtree.com/svg/20170410/url_650526.png"
                onClick={() => alert(`Opening URL: ${item.url}`)}
              />
            );
          case ATTACHMENT_TYPE_QUICKREPLY_ATTACHMENT:
            return <UploadFile img={item.source} />;
          default:
            return null;
        }
      });
    case ATTACHMENT_TYPE_QUICKREPLY_IMAGE:
      return data.map((item, i) => (
        <ImageQuickReplyItem size="125px" key={i} {...item} />
      ));
    default:
      return null;
  }
};

export default InlineController;
