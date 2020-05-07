import React, { useState } from "react";

import KeyboardMicButton from "./KeyboardMicButton";
import ChatInputContainer from "../Chat/ChatInputContainer";



const TextBar = () => {

  // If input type text is double clicked make it back to mic and key board icon
  const handleDoubleClick = () => {
    setInputType(0)
  }

  const [inputType, setInputType] = useState(0);
  return (

    <div>
      {
        (inputType === 0) ? <KeyboardMicButton onClick={() => setInputType(1)} /> : <ChatInputContainer onDoubleClick={handleDoubleClick} />
      }
    </div>
  );
};



export default TextBar;
