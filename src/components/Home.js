import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { FaGoogle } from "react-icons/fa";

import NavButton from "./NavButton";
import Footer from "./Footer";

import LogoImg from "../images/4.png";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f9c900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 100px;
`;

const LogoText = styled.p`
  font-family: "Proxima Bold";
  margin-top: 0.75rem;
  margin-left: 1rem;
  font-size: 4rem;
`;

const Home = () => {
    const history = useHistory();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Wrapper>
            <Navbar className="align-self-end p-4" light expand="md">
                <NavbarToggler className="ml-auto" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="h5 text-dark" href="#">
                                Home
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="h5 text-dark" href="#">
                                About us
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="h5 text-dark" href="#">
                                Features
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="h5 text-dark" href="#">
                                Download
              </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="h5 text-dark" href="#">
                                Testimonial
              </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <Container
                className="d-flex flex-column justify-content-center align-items-center flex-fill"
                style={{ maxWidth: "600px" }}
            >
                <Logo>
                    <LogoImage src={LogoImg} alt="Lens" />
                    <LogoText>Lens!</LogoText>
                </Logo>
                <h3 className="mt-4 text-uppercase">Virtual Market Researcher</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
        </p>
                <NavButton
                    icon={<FaGoogle />}
                    text="Login with Google"
                    color="#A1373F"
                    className="align-self-center align-self-md-start"
                    onClick={() => {
                        history.push("/chat");
                    }}
                />
            </Container>
            <Footer />
        </Wrapper>
    );
};

export default Home;
