import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Container } from "reactstrap";
import { FaGoogle } from "react-icons/fa";

import NavButton from "./NavButton";
import Footer from "./Footer";

import LogoImg from "../images/4.png";
import Item1 from "../images/elements/1.png";
import Item2 from "../images/elements/2.png";
import Item3 from "../images/elements/3.png";
import Item4 from "../images/elements/4.png";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #f9c900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BgItems = styled.div`
  width: 100%;
  min-height: 100%;
  z-index: 0;
`;

const BaseElement = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Element1 = styled(BaseElement)`
  background: url(${Item1}) left bottom no-repeat;
  background-size: 25%;
  bottom: 0;
  left: 0;
`;
const Element2 = styled(BaseElement)`
  background: url(${Item2}) right bottom no-repeat;
  background-size: 25%;
  bottom: 0;
  right: 0;
`;
const Element3 = styled(BaseElement)`
  background: url(${Item3}) left top no-repeat;
  background-size: 15%;
  background-position: 2rem 2rem;
  @media (max-width: 576px) {
    background-size: 25%;
    background-position: 1rem 1rem;
  }
`;
const Element4 = styled(BaseElement)`
  background: url(${Item4}) right top no-repeat;
  background-size: 15%;
  right: 5rem;
  @media (max-width: 576px) {
    right: 0rem;
    background-size: 40%;
  }
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
      <BgItems>
        <Element1 />
        <Element2 />
        <Element3 />
        <Element4 />
      </BgItems>
      <Container
        className="d-flex flex-column justify-content-center align-items-center flex-fill"
        style={{ maxWidth: "600px", zIndex: 2 }}
      >
        <Logo>
          <LogoImage src={LogoImg} alt="Lens" />
          <LogoText>Lens!</LogoText>
        </Logo>
        <h4 className="mt-4 text-uppercase">
          Natural Language Interpreting Solution
        </h4>
        <p>
          Lens runs on multi brain architecture making it a highly customizable
          solution for enterprise developers to easily solve problems around
          text understanding. You can use Lens as a Virtual Product Manager, a
          Virtual Market Researcher, a Business Analyst assisting respective
          personas. Finally, its called Lens because you can really converse
          with it to know what inside your data!
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
