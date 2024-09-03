import { FunctionComponent } from "react";
import QueueComponent from "../components/Queue/index";
import TicketsComponent from "../components/Tickets/index";
import ChatComponent from "../components/Chat/index";

import "../styles/chat.css";

const Chat: FunctionComponent = () => {
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
              <ChatComponent />
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
