import { FunctionComponent } from "react";
import SideBar from "@components/side-bar";
import QueueComponent from "@components/Queue";
import TicketsComponent from "@components/Tickets";
import ChatComponent from "@components/Chat";

import styles from "./chat.module.css";

const Chat: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sideBar}>
        <SideBar />
      </div>
      <main className={styles.contentWrapper}>
        <section className={styles.content}>
          <div className={styles.container}>
            <TicketsComponent />
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