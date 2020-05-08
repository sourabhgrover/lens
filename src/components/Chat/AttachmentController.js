import React from "react";
import TextQuickReply from "./TextQuickReply";
import ImageQuickReply from "./ImageQuickReply";
import IntentTable from "../Table/IntentTable";
import HeroImage from "./HeroImage";
import QuickReplyAction from "./QuickReplyAction";

import {
  ATTACHMENT_TYPE_HERO_IMAGE,
  ATTACHMENT_TYPE_QUICKREPLY_TEXT,
  ATTACHMENT_TYPE_QUICKREPLY_IMAGE,
  ATTACHMENT_TYPE_QUICKREPLY_ACTION,
  ATTACHMENT_TYPE_EXCEL,
} from "../../utils/const";

const AttachmentController = (props) => {
  switch (props.type) {
    case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
      return <TextQuickReply {...props} />;
    case ATTACHMENT_TYPE_QUICKREPLY_IMAGE:
      return <ImageQuickReply {...props} />;
    case ATTACHMENT_TYPE_QUICKREPLY_ACTION:
      return <QuickReplyAction {...props} />;
    case ATTACHMENT_TYPE_EXCEL:
      return (
        <IntentTable
          title={props.title}
          data={props.value[0]}
          allowOverflow={false}
        />
      );
    case ATTACHMENT_TYPE_HERO_IMAGE:
      return <HeroImage {...props} />;
    default:
      return null;
  }
};

export default AttachmentController;
