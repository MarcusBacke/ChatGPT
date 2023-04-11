import React from 'react';
import Chat from "pages/components/Chat";
import ChatImput from "pages/components/ChatImput";

type Props = {
    params: {
        id: string;
    };
};

function ChatPage({params: {id}}: Props) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <Chat chatId={id}/>
        <ChatImput chatId={id}/>
    </div>
  );
}

export default ChatPage;