import React from "react";
import SideBar from "../../components/side-bar";
import QueueItems from "../../components/queue-items";
import "../../style/chatPage.css"; 

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar sidebar-visible">
        <SideBar />
      </div>
      <div className="main-content">
        <div className="messages-section">
          <div className="messages-header">
            <h3 className="messages-title">Mensagens</h3>
            <div className="header-controls">
              <div className="icon">
                <img src="https://via.placeholder.com/32" alt="Icon" />
              </div>
              <div className="icon">
                <img src="https://via.placeholder.com/32" alt="Icon" />
              </div>
              <div className="icon">
                <img src="https://via.placeholder.com/32" alt="Icon" />
              </div>
            </div>
          </div>
          <div className="messages-content">
            <div className="message-item">
              <img src="https://via.placeholder.com/24" alt="Avatar" />
              <div className="message-item-content">
                <div className="client-info">Cliente:</div>
                <div className="client-info-text">Nome do Cliente</div>
                <div className="client-info-text-long">
                  Detalhes adicionais do cliente
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-box">
          <div className="header">
            <img className="header-logo" src="https://via.placeholder.com/48" alt="Logo" />
            <div className="header-info">
              <div className="header-info-display">
                <div className="header-text">Título do Header</div>
                <div className="header-controls">
                  <div className="header-checkbox">
                    <input type="checkbox" />
                  </div>
                  <div className="header-video">
                    <img src="https://via.placeholder.com/32" alt="Video" />
                  </div>
                  <div className="header-close">
                    <a href="#">Fechar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-bubble">
            <div className="chat-message">
              <div className="chat-message-content">
                Mensagem do Chat
              </div>
            </div>
          </div>
        </div>
      </div>
      <QueueItems />
    </div>
  );
};

export default Dashboard;
