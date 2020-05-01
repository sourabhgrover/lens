import React from "react";
import { Container, Row, Col } from "reactstrap";
import TextQuickReply from "./TextQuickReply";

import { ATTACHMENT_TYPE_QUICKREPLY_TEXT } from "../../utils/const";


import {
    FaClipboardList,
    FaBoxOpen,
    FaGlobeAsia,
    FaWineBottle,
    FaVenusMars,
    FaComments,
} from "react-icons/fa";

const AttachmentContainerInterface = (props) => {
    console.log("comes here");
    console.log(props);
    
    let { type, value } = props;

    if (type === ATTACHMENT_TYPE_QUICKREPLY_TEXT) {
        return <TextQuickReply values={value}></TextQuickReply>
    }
};



export default AttachmentContainerInterface;
