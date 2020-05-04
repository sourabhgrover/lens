import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { uploadFile } from "../../redux/actions/chatAction";

import QuickReply from "./QuickReply";

const UploadFile = (props) => {
  const inputRef = useRef();
  const [text, setText] = useState("Upload File");

  const handleUpload = () => {
    const file = inputRef.current.files[0];
    setText(`Uploading: ${file.name}`);
    props
      .uploadFile(file)
      .then(setText("Uploaded!"))
      .catch((err) => setText("Upload Failed."));
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        onChange={() => handleUpload()}
        hidden
      />
      <QuickReply
        image={props.img}
        text={text}
        color="#407294"
        onClick={(e) => inputRef.current.click()}
      />
    </>
  );
};

export default connect(null, { uploadFile })(UploadFile);
