import React from "react";
import { Container, Row, Col } from "reactstrap";
import QuickReply from "./QuickReply";


import {
    FaClipboardList,
    FaBoxOpen,
    FaGlobeAsia,
    FaWineBottle,
    FaVenusMars,
    FaComments,
} from "react-icons/fa";

const AttachmentContainer = (props) => {
    console.log("comes here");
    console.log(props)
    return (
        <Container className="w-75 ml-5 ml-sm-0">
            <Row>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <QuickReply
                        icon={<FaClipboardList />}
                        text="Summary Details"
                        color="lightblue"
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <QuickReply
                        icon={<FaBoxOpen />}
                        text="How many beauty products sold overall?"
                        color="lightgreen"
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <QuickReply
                        icon={<FaGlobeAsia />}
                        text="Region wise data on products sold"
                        color="blue"
                    />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3}>
                    <QuickReply
                        icon={<FaWineBottle />}
                        text="Top 5 beauty products"
                        color="yellowgreen"
                    />
                </Col>

            </Row>
        </Container>
    );
};



export default AttachmentContainer;
