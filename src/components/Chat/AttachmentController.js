import React from "react";
import TextQuickReply from "./TextQuickReply";
import ImageQuickReply from "./ImageQuickReply";

import { ATTACHMENT_TYPE_QUICKREPLY_TEXT, ATTACHMENT_TYPE_QUICKREPLY_IMAGE } from "../../utils/const";




const AttachmentController = (props) => {

    switch (props.type) {
        case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
            return <TextQuickReply {...props}></TextQuickReply>
        case ATTACHMENT_TYPE_QUICKREPLY_IMAGE:
            return <ImageQuickReply {...props} />
        default:
            return null;
    }
};



export default AttachmentController;
