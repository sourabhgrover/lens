import React from "react";
import TextQuickReply from "./TextQuickReply";
import ImageQuickReply from "./ImageQuickReply";

import { ATTACHMENT_TYPE_QUICKREPLY_TEXT, ATTACHMENT_TYPE_QUICKREPLY_IMAGE, ATTACHMENT_TYPE_EXCEL } from "../../utils/const";




const AttachmentController = (props) => {

    switch (props.type) {
        case ATTACHMENT_TYPE_QUICKREPLY_TEXT:
            return <TextQuickReply {...props}></TextQuickReply>
        case ATTACHMENT_TYPE_QUICKREPLY_IMAGE:
            return <ImageQuickReply {...props} />
        case ATTACHMENT_TYPE_EXCEL:
            return null;
        default:
            return null;
    }
};



export default AttachmentController;
