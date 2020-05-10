import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ChartContainer from "./ChartContainer";
import ListView from "./ListView";
import ListButton from "./ListButton";

const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 576px) {
    margin-top: 2rem;
    flex-direction: row;
  }
`;

const ListVertical = (props) => {
  return (
    <ChartContainer title={props["name:"]}>
      <GridContainer>
        <ListView title="List View" border="#FFE88F" bg="#FFF5CF">
          {props.values.map((value, i) => {
            for (let x in value)
              return (
                <p key={i}>
                  - {x} | <b>{value[x]}</b>
                </p>
              );
          })}
        </ListView>
        <ButtonContainer>
          <ListButton
            text="7690"
            subtext="Total Reviews Analyzed"
            image="http://icons.iconarchive.com/icons/gianni-polito/colobrush/256/system-star-icon.png"
          />
          <ListButton
            text="3:47:00"
            subtext="Time Taken"
            image="https://img.icons8.com/officel/80/000000/time.png"
          />
        </ButtonContainer>
      </GridContainer>
    </ChartContainer>
  );
};

ListVertical.propTypes = {
  "name:": PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
};

export default ListVertical;
