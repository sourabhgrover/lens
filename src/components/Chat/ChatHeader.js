import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Navbar, Collapse, Nav, NavItem } from "reactstrap";
import { IconContext } from "react-icons";
import {
  FaClipboardList,
  FaSignOutAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

import NavButton from "./NavButton";
import LogoImg from "../../images/4.png";

const NavbarStyled = styled(Navbar)`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgb(249, 201, 0);
  z-index: 999;
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
  height: 36px;
`;

const LogoText = styled.h3`
  margin-top: 2px;
`;

const Toggler = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.5rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const ChatHeader = () => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <NavbarStyled expand="md" className="px-4 px-md-3 py-1">
      <LogoContainer href="#" onClick={() => history.push("/")}>
        <LogoImage src={LogoImg} alt="Lens!" />
        <LogoText className="text-white">Lens!</LogoText>
      </LogoContainer>
      <Toggler onClick={toggle} type="button" aria-label="Toggle navigation">
        <IconContext.Provider value={{ size: "24px", color: "#fff" }}>
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </IconContext.Provider>
      </Toggler>
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className="mx-2">
            <NavButton
              text="Summary Details"
              icon={<FaClipboardList />}
              color="#A1373F"
              size="0.875rem"
              onClick={() => history.push("/summary")}
            />
          </NavItem>
          <NavItem className="mx-2">
            <NavButton
              text="Sign Out"
              icon={<FaSignOutAlt />}
              color="#A1373F"
              size="0.875rem"
              onClick={() => history.push("/")}
            />
          </NavItem>
        </Nav>
      </Collapse>
    </NavbarStyled>
  );
};

export default ChatHeader;
