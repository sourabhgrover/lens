import React, { memo, useState } from "react";
import styled from "styled-components";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from "reactstrap";
import { FaClipboardList, FaSignOutAlt } from "react-icons/fa";

import NavButton from "./NavButton";
import LogoImg from "../../images/4.png";

const NavbarStyled = styled(Navbar)`
  background-color: rgb(249, 201, 0);
`;

const LogoContainer = styled.a`
  padding-top: 0.5rem;
  display: flex;
  font-family: "Proxima Bold";
  &:hover {
    text-decoration: none;
    color: #eee;
  }
`;

const LogoImage = styled.img`
  margin-right: 0.5rem;
  height: 50px;
`;

const LogoText = styled.h1`
  margin-top: 5px;
`;

const ChatHeader = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <NavbarStyled expand="md" className="px-5">
            <LogoContainer href="/">
                <LogoImage src={LogoImg} alt="Lens!" />
                <LogoText className="text-white">Lens!</LogoText>
            </LogoContainer>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem className="mx-2">
                        <NavButton
                            text="Summary Details"
                            icon={<FaClipboardList />}
                            color="#A1373F"
                            size="20px"
                        />
                    </NavItem>
                    <NavItem className="mx-2">
                        <NavButton
                            text="Sign Out"
                            icon={<FaSignOutAlt />}
                            color="#A1373F"
                            size="20px"
                        />
                    </NavItem>
                </Nav>
            </Collapse>
        </NavbarStyled>
    );
    // return (
    //     <div className="card-header msg_head">
    //         <div className="d-flex bd-highlight">
    //             <div className="img_cont">
    //                 <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" alt="" />

    //             </div>
    //             <div className="user_info">
    //                 <span>Lens!</span>

    //             </div>
    //         </div>

    //         <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i>
    //             <button type="button" className="btn btn-default btn-sm">
    //                 <span className="glyphicon glyphicon-log-out"></span> Log out
    //                               </button>
    //         </span>
    //         <div className="action_menu">
    //             <ul>
    //                 <li><i className="fas fa-user-circle"></i> View profile</li>
    //                 <li><i className="fas fa-users"></i> Add to close friends</li>
    //                 <li><i className="fas fa-plus"></i> Add to group</li>
    //                 <li><i className="fas fa-ban"></i> Block</li>
    //             </ul>
    //         </div>
    //     </div>
    // );
}

export default memo(ChatHeader);