import React from "react";
import TextQuickReply from "./TextQuickReply";

import { ATTACHMENT_TYPE_QUICKREPLY_TEXT } from "../../utils/const";




const AttachmentController = (props) => {

    // let { type, value } = props;

    if (props.type === ATTACHMENT_TYPE_QUICKREPLY_TEXT) {
        return <TextQuickReply {...props}></TextQuickReply>
    }
};



export default AttachmentController;
