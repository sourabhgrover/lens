import React, { useState } from "react";

import KeyboardMicButton from "./KeyboardMicButton";
import ChatInputContainer from "../Chat/ChatInputContainer";


const SummaryFooter = () => {
  const [inputType, setInputType] = useState(0);
  return (

    <div>
      {
        (inputType === 0) ? <KeyboardMicButton onClick={() => setInputType(1)} /> : <ChatInputContainer />
      }
    </div>
  );
};



export default SummaryFooter;
