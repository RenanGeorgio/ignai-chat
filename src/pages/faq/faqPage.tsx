import React from "react";
import "../../style/faqPage.css";

import SideBar from "../../components/side-bar";
import Title from "../../components/title";
import Conversation from "../../components/conversation";

const Page: React.FC = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <main className="main">
        <section className="section">
          <div className="titleWrapper">
            <Title
              fAQ="FAQ"
              icon16LineEdit="/icon16lineedit.svg"
              search="/search.svg"
            />
            <div className="questionsContainer">
              <div className="questionsList">
                <div className="questionTitle">Perguntas em destaque</div>
                <div className="questionItem">
                  <div className="questionText">
                    Como encontrar a 2 via do cliente?
                  </div>
                </div>
                <div className="questionItem">
                  <div className="questionText">
                    Qual botão pula para o próximo da fila?
                  </div>
                </div>
                <div className="questionItem">
                  <div className="questionText">
                    Como atender somente ligação?
                  </div>
                </div>
                <div className="questionItem">
                  <div className="questionText">
                    Como atender somente WhatsApp?
                  </div>
                </div>
                <div className="questionItem">
                  <div className="questionText">
                    Qual o tempo máximo de espera do cliente?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Conversation />
        </section>
      </main>
      <div className="reportBugContainer">
        <div className="reportBugHeader">
          <h3 className="reportBugTitle">Relatar bug</h3>
        </div>
        <div className="ticketList">
          <div className="ticketListHeader">
            <h3 className="ticketListTitle">Lista de tickets</h3>
          </div>
          <div className="ticketItemList">
            <div className="ticketItem">
              <div className="ticketItemText">
                <ol>
                  <li>Erro ao coletar dados</li>
                </ol>
              </div>
              <div className="ticketItemText">
                <ol>
                  <li>Erro no buscador</li>
                </ol>
              </div>
            </div>
            <div className="ticketItemList">
              <img
                className="ticketItemImage"
                loading="lazy"
                alt=""
                src="/3668844-clock-pending-time-icon-1@2x.png"
              />
              <div>
                <img
                  className="ticketItemDoneImage"
                  loading="lazy"
                  alt=""
                  src="/1329086-circle-done-downloaded-icon-1@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
