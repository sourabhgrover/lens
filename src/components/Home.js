import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
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

    return (
        <Wrapper>
            <Container
                className="d-flex flex-column justify-content-center align-items-center flex-fill"
                style={{ maxWidth: "600px" }}
            >
                <Logo>
                    <LogoImage src={LogoImg} alt="Lens" />
                    <LogoText>Lens!</LogoText>
                </Logo>
                <h4 className="mt-4 text-uppercase">Natural Language Interpreting Solution</h4>
                <p>
                    Lens runs on multi brain architecture making it a highly customizable solution for enterprise developers to easily solve problems around text understanding.
                    You can use Lens as a Virtual Product Manager, a Virtual Market Researcher, a Business Analyst assisting respective personas. Finally, its called Lens because you can really converse with it to know what inside your data!
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
