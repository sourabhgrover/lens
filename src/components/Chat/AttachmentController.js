import React from "react";
import { connect } from "react-redux";
import TextQuickReply from "./TextQuickReply";
import IntentTable from "../Table/IntentTable";
import HeroImage from "./HeroImage";
import QuickReplyAction from "./QuickReplyAction";

import {
  displayQuickReply,
  hideQuickReply,
} from "../../redux/actions/quickReplyAction";

import {
  ATTACHMENT_TYPE_HERO_IMAGE,
  ATTACHMENT_TYPE_QUICKREPLY_TEXT,
  ATTACHMENT_TYPE_QUICKREPLY_IMAGE,
  ATTACHMENT_TYPE_QUICKREPLY_ACTION,
  ATTACHMENT_TYPE_EXCEL,
} from "../../utils/const";

const AttachmentController = (props) => {
  if (props.type !== ATTACHMENT_TYPE_QUICKREPLY_IMAGE) {
    props.hideQuickReply();
  }
  switch (props.type) {
    case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
      return <TextQuickReply {...props} />;
    case ATTACHMENT_TYPE_QUICKREPLY_IMAGE:
      props.displayQuickReply(props.value);
      return null;
    // return <ImageQuickReply {...props} />;
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

const mapDispatchToProps = (dispatch) => ({
  displayQuickReply: (data) => dispatch(displayQuickReply(data)),
  hideQuickReply: () => dispatch(hideQuickReply()),
});

export default connect(null, mapDispatchToProps)(AttachmentController);
