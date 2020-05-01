import React from 'react';



import ChatHeader from "./ChatHeader";
import ChatInputContainer from "./ChatInputContainer";
import ChatContent from "./ChatContent";

class Chat extends React.Component {
    render() {
        return (
            <>
                <ChatHeader />
                <ChatContent />
                <ChatInputContainer />
            </>
        );
    }
}

export default Chat;