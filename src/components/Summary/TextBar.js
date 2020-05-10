import React, { useState, useEffect } from "react";

import KeyboardMicButton from "./KeyboardMicButton";
import ChatInputContainer from "../Chat/ChatInputContainer";

const TextBar = ({ history }) => {
  const [inputType, setInputType] = useState(0);

  // If returning back from table, set input type back to text
  useEffect(() => {
    if (history?.scrollToBottom) {
      setInputType(1);
    }
  }, [history]);

  // If input type text is double clicked make it back to mic and key board icon
  const handleDoubleClick = () => {
    setInputType(0);
  };
  return (
    <div>
      {inputType === 0 ? (
        <KeyboardMicButton onClick={() => setInputType(1)} />
      ) : (
        <ChatInputContainer onDoubleClick={handleDoubleClick} />
      )}
    </div>
  );
};

export default TextBar;
