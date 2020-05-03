import React, { useRef, useState } from "react";
import axios from "axios";
import { FaFileUpload, FaLink } from "react-icons/fa";

import QuickReply from "../../components/ChatBot/QuickReply";
import CarouselContainer from "./CarouselContainer";

const UploadFile = () => {
  const inputRef = useRef();
  const [text, setText] = useState("Upload File");

  const handleUpload = () => {
    const file = inputRef.current.files[0];

    // If you're using Form Data
    let data = new FormData();
    data.append("file", file);

    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);

        if (percent < 100) {
          setText(`Uploading: ${percent}% done`);
        }
      },
    };

    axios.post("your-api-url", data, options).then((res) => {
      console.log(res);
      setText("Uploaded!");
    });
  };

  return (
    <>
      <input
        type="file"
        ref={inputRef}
        onChange={() => handleUpload()}
        hidden
      />
      <CarouselContainer size={200} slides={2}>
        <QuickReply icon={<FaLink />} text="Submit URL" color="#407294" />
        <QuickReply
          icon={<FaFileUpload />}
          text={text}
          color="#407294"
          onClick={(e) => inputRef.current.click()}
        />
      </CarouselContainer>
    </>
  );
};

export default UploadFile;
