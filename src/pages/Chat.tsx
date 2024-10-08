import { FunctionComponent, useRef, useEffect } from "react";

import { useCommunication } from "../contexts/communication/hooks";
import QueueComponent from "../components/Queue/queue";
import TicketsComponent from "../components/Tickets/index";
import ChatComponent from "../components/Chat/index";
import { Phone } from "../components/Call/Phone";
import Dashboard from "../components/Communication/Dashboard";
import { CONVERSATION_CHANNEL } from "../types";

import "../styles/chat.css";

const Chat: FunctionComponent = () => {
  /*const render = useRef<any>(undefined);
  const { workerPlataform } = useCommunication();

  useEffect(() => {
    if (workerPlataform === CONVERSATION_CHANNEL.CALL) {
      render.current = <Phone />
    } else if ((workerPlataform === CONVERSATION_CHANNEL.DEFAULT) || (workerPlataform == null)) {
      render.current = <Dashboard />
    } else {
      render.current = <ChatComponent />
    }
  }, [workerPlataform]);*/

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
              {render.current}
            </div>
          </div>
        </section>
      </main>
      <div className="rightSideBar">
        <div className="queue">
          <Phone />
        </div>
      </div>
    </div>
  );
}

export default Chat;