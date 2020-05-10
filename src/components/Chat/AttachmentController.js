import React from "react";
import { connect } from "react-redux";

import IntentTable from "../Table/IntentTable";
import HeroImage from "./HeroImage";
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
  switch (props.type) {
    case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
    case ATTACHMENT_TYPE_QUICKREPLY_ACTION:
    case ATTACHMENT_TYPE_QUICKREPLY_IMAGE:
      props.displayQuickReply(props.type, props.value);
      return null;
    case ATTACHMENT_TYPE_EXCEL:
      props.hideQuickReply();
      return (
        <IntentTable
          title={props.title}
          data={props.value[0]}
          allowOverflow={false}
        />
      );
    case ATTACHMENT_TYPE_HERO_IMAGE:
      props.hideQuickReply();
      return <HeroImage {...props} />;
    default:
      return null;
  }
};

const mapDispatchToProps = (dispatch) => ({
  displayQuickReply: (type, data) => dispatch(displayQuickReply(type, data)),
  hideQuickReply: () => dispatch(hideQuickReply()),
});

export default connect(null, mapDispatchToProps)(AttachmentController);
