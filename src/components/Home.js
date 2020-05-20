import React from "react";
import { useDispatch } from "react-redux";
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

import { GoogleLogin } from "react-google-login";
import { GOOGLE_CLIENT_ID } from "../utils/const";
import { userLoginSucess } from "../redux/actions/authAction";
import { LOGIN_FAIL } from "../redux/actions/type";

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
  background: url(${Item2}) no-repeat,
    url("https://image.flaticon.com/icons/png/512/39/39237.png") no-repeat;
  background-position: right bottom, 75% 95%;
  background-size: 20%, 10%;
  bottom: 0;
  right: 0;
  @media (max-width: 992px) {
    background-size: 23%, 15%;
    background-position: right bottom, 70% bottom;
  }
  @media (max-width: 768px) {
    background-size: 25%, 17.5%;
    background-position: right bottom, 65% bottom;
  }
  @media (max-width: 576px) {
    background-size: 30%, 20%;
    background-position: right bottom, 60% bottom;
  }
  @media (max-width: 420px) {
    background-position: right bottom, center calc(100% - 0.875rem);
  }
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
    background-size: 30%;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImage = styled.img`
  width: 100px;
  @media (max-width: 576px) {
    width: 75px;
  }
`;

const LogoText = styled.p`
  font-family: "Proxima Bold";
  margin-top: 0.75rem;
  margin-left: 1rem;
  font-size: 4rem;
  @media (max-width: 576px) {
    font-size: 3rem;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
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
        <h4 className="mt-4 text-center text-uppercase">
          Natural Language Interpreting Solution
        </h4>
        <p className="text-center">
          Lens runs on multi brain architecture making it a highly customizable
          solution for enterprise developers to easily solve problems around
          text understanding. You can use Lens as a Virtual Product Manager, a
          Virtual Market Researcher, a Business Analyst assisting respective
          personas. Finally, its called Lens because you can really converse
          with it to know what inside your data!
        </p>
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          render={(renderProps) => (
            <NavButton
              icon={<FaGoogle />}
              text="Login with Google"
              color="#A1373F"
              className="align-self-center"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            />
          )}
          buttonText="Login with Google"
          responseType="token"
          accessType="offline"
          onSuccess={(response) => {
            dispatch(userLoginSucess(response));
            history.push("/chat");
          }}
          onFailure={() => dispatch({ type: LOGIN_FAIL })}
          cookiePolicy={"single_host_origin"}
          uxMode="popup"
        />
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Home;
