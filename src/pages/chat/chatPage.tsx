import { FunctionComponent } from "react";
import SideBar from "../../components/side-bar";
import QueueItems from "../../components/queue-items";
import styles from "./chat.module.css";
import MessageComponent from "../../components/messages";
import ChatComponent from "../../components/chat";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.messageAndSidebar}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.messageContainer}>
          <MessageComponent />
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
          <QueueItems />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
