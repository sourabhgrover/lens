import React from "react";
import BasicCard from "../../components/Summary/BasicCard";

import img1 from "../../images/a.jpg";

const Persona = () => {
  return (
    <BasicCard title="Classification By Persona">
      <img src={img1} alt="something" />
    </BasicCard>
  );
};

export default Persona;
