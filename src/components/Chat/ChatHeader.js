import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarStyled expand="md" className="px-5">
      <LogoContainer href="javascript:void(0)" onClick={() => history.push("/")}>
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
              onClick={() => history.push("/summary")}
            />
          </NavItem>
          <NavItem className="mx-2">
            <NavButton
              text="Sign Out"
              icon={<FaSignOutAlt />}
              color="#A1373F"
              size="20px"
              onClick={() => history.push("/")}
            />
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarStyled>
  );
};

export default ChatHeader;
