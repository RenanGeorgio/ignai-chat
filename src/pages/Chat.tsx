import { FunctionComponent } from "react";

import { useChat } from "../contexts/chat/hooks";
import QueueComponent from "../components/Queue/index";
import TicketsComponent from "../components/Tickets/index";
import ChatComponent from "../components/Chat/index";
//import VoiceCall from "../components/Call/voice-call";
import { Phone } from "../components/Call/Phone";

import "../styles/chat.css";

const Chat: FunctionComponent = () => {
  const { currentChat } = useChat();
  
  return (
    <div className="dashboard">
      <div className="messageAndSidebar">
        <div className="messageContainer">
          <TicketsComponent />
        </div>
      </div>
      <main className="contentWrapper">
        <section className="content">
          <div className="container">
            <div className="separador">
              {currentChat ? (
                <ChatComponent />
                ) : (
                <Phone />
                )
              }
            </div>
          </div>
        </section>
      </main>
      <div className="rightSideBar">
        <div className="queue">
          <QueueComponent />
        </div>
      </div>
    </div>
  );
}

export default Chat;