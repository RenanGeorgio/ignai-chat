import { FunctionComponent } from "react";
import QueueComponent from "../components/Queue/index";
import TicketsComponent from "../components/Tickets/index";
import ChatComponent from "../components/Chat/index";

import styles from "../styles/chat.css";

const Chat: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.messageAndSidebar}>
        <div className={styles.messageContainer}>
          <TicketsComponent />
        </div>
      </div>
      <main className={styles.contentWrapper}>
        <section className={styles.content}>
          <div className={styles.container}>
            <div className={styles.separador}>
              <ChatComponent />
            </div>
          </div>
        </section>
      </main>
      <div className={styles.rightSideBar}>
        <div className={styles.queue}>
          <QueueComponent />
        </div>
      </div> 
    </div>
  );
}

export default Chat;