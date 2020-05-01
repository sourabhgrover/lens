import React from "react";
import TextQuickReply from "./TextQuickReply";

import { ATTACHMENT_TYPE_QUICKREPLY_TEXT } from "../../utils/const";




const AttachmentController = (props) => {

    switch (props.type) {
        case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
            return <TextQuickReply {...props}></TextQuickReply>
        default:
            return null;
    }
};



export default AttachmentController;
