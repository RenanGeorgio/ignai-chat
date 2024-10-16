import React, { useState } from "react";

import QuestionsComponents from "../components/Faq/questions";
import BugComponents from "../components/Faq/bug";
import AnswerComponent from "../components/Faq/answer";

import "../styles/faq.css";

const Page: React.FC = () => {
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  return (
    <div className="dashboard">
      <div className="messageAndSidebar">
        <div className="messageContainer">
          <QuestionsComponents onSelectQuestion={setSelectedQuestionIndex} />
        </div>
      </div>
      <main className="contentWrapper">
        <section className="content">
          <div className="container">
            <div className="separador">
              <AnswerComponent selectedQuestionIndex={selectedQuestionIndex} />
            </div>
          </div>
        </section>
      </main>
      <div className="rightSideBar">
        <div className="queue">
          <BugComponents />
        </div>
      </div>
    </div>
  );
}

export default Page;
