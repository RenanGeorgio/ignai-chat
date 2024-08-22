import React from "react";
import "../style/conversation.css"; 
import Input from "./input";

export type ConversationType = {
  className?: string;
};

const Conversation: React.FC<ConversationType> = ({ className = "" }) => {
  return (
    <div className={`conversation ${className}`}>
      <div className="conversationHeader">
        <div className="headerContent">
          <img
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
          <div className="headerText">
            <h3>Bot Tira Dúvidas</h3>
            <div className="headerTextStatus">
              <div className="statusText">Escrevendo...</div>
            </div>
            <input
              className="checkbox"
              type="checkbox"
            />
            <div className="checkboxPlaceholder" />
          </div>
        </div>
      </div>
      <div className="messageContainer">
        <div>
          <div className="timeStamp">11:03 AM</div>
          <div className="messageContent">
            <div>
              Uhmm, olhei no sistema aqui e ví que realmente o seu pedido
              deveria ter chegado, vou lhe passar para um de nossos atendentes
              para averiguarmos melhor.
            </div>
          </div>
        </div>
        <div>
          <div className="supportMessage">
            <div className="dot" />
            <div className="dot" />
            <div className="dot" />
          </div>
        </div>
      </div>
      <Input />
    </div>
  );
}

export default Conversation;
