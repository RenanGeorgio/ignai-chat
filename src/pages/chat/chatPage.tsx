import { FunctionComponent } from "react";
import SideBar from "../../components/side-bar";
import QueueItems from "../../components/Queue/queue-items";
import styles from "./chat.module.css";
import TicketsComponent from "../../components/Tickets";
import ChatComponent from "../../components/Chat/chat";

const Dashboard: FunctionComponent = () => {
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
          <QueueItems />
        </div>
      </div> 
    </div>
  );
}

export default Dashboard;