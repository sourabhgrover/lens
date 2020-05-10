import React from "react";
import styled from "styled-components";

const Button = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.border};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
`;

const Image = styled.img`
  margin-bottom: 5px;
  width: 50px;
`;

const ListButton = ({ color, border, image, text, subtext }) => {
  return (
    <Button color={color} border={border}>
      <Image src={image} alt="some button" />
      <h5>
        <b>{text}</b>
      </h5>
      <h6>{subtext}</h6>
    </Button>
  );
};

ListButton.defaultProps = {
  color: "#D2DCFF",
  border: "#C3D0FF",
};

export default ListButton;
