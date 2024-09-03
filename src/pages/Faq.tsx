import React from "react";

import QuestionsComponents from "../components/Faq/questions";
import ConversationComponent from "../components/Faq/conversation";
import BugComponets from "../components/Faq/bug";

import "../styles/faq.css";

const Page: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="messageAndSidebar">
        <div className="messageContainer">
          <QuestionsComponents />
        </div>
      </div>
      <main className="contentWrapper">
        <section className="content">
          <div className="container">
            <div className="separador">
              <ConversationComponent />
            </div>
          </div>
        </section>
      </main>
      <div className="rightSideBar">
        <div className="queue">
          <BugComponets />
        </div>
      </div>
    </div>
  );
}

export default Page;