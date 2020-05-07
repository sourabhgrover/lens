import React from "react";


const SummaryContentHeader = ({ title, description }) => {

  return (

    <div className="text-center mt-3">
      {(title === undefined || title === null) ? '' : <h2>{title}</h2>}
      {(description === undefined || description === null) ? '' : <p>{description}</p>}

    </div>
  );
};



export default SummaryContentHeader;
