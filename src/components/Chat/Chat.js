import React from 'react';



import ChatHeader from "./ChatHeader";
import ChatInputContainer from "./ChatInputContainer";
import ChatContent from "./ChatContent";
import Footer from "../Footer";


class Chat extends React.Component {
    render() {
        return (
            <>
                <ChatHeader />
                <ChatContent />
                <ChatInputContainer />
                <Footer />
            </>
        );
    }
}

export default Chat;