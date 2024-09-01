import React from "react";
import "../../style/faqPage.css";

import SideBar from "../../components/side-bar";
import QuestionsComponents from "../../components/questions";
import ConversationComponent from "../../components/conversation";
import styles from "../../pages/chat/chat.module.css";
import BugComponets from "../../components/bug";

const Page: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.messageAndSidebar}>
        <div className={styles.sideBar}>
          <SideBar />
        </div>
        <div className={styles.messageContainer}>
          <QuestionsComponents />
        </div>
      </div>
      <main className={styles.contentWrapper}>
        <section className={styles.content}>
          <div className={styles.container}>
            <div className="separador">
              <ConversationComponent />
            </div>
          </div>
        </section>
      </main>
      <div className={styles.rightSideBar}>
        <div className={styles.queue}>
          <BugComponets />
        </div>
      </div>
    </div>
  );
};

export default Page;
