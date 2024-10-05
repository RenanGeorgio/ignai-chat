import { FunctionComponent } from "react";

//import { useChat } from "../contexts/chat/hooks";
import QueueComponent from "../components/Queue/queue";
import TicketsComponent from "../components/Tickets/index";
//import ChatComponent from "../components/Chat/index";
//import { Phone } from "../components/Call/Phone";
import Dashboard from "../components/Communication/Dashboard";

import "../styles/chat.css";

const Chat: FunctionComponent = () => {
  //const { currentChat } = useChat();

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
              <Dashboard />
              {/*currentChat ? <ChatComponent /> : <Phone />*/}
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