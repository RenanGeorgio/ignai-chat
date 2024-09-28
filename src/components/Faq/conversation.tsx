import React, { useState } from "react";
import { TextField } from "@mui/material";

import { BotIcon } from "../../assets/icons";

import styles from "./conversation.module.css";

const ConversationComponent: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'cliente',
      name: 'Gabriel',
      text: 'Olá, estou aqui para lhe ajudar, qual a sua dúvida?',
      time: '11:03 AM',
    },
    {
      sender: 'bot',
      name: 'Atendente',
      text: 'Meu nome é Leticia, estou com problema ao emitir a 2 via do boleto.',
      time: '11:03 AM',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        sender: 'cliente',
        name: 'Marcelo Almeida', 
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className={styles.conversation}>
      <header className={styles.groupChat}>
        <div className={styles.conversation1}>
          <div className={styles.conversation2}>
            <BotIcon />
            <div className={styles.nomeEstabelecimento}>
              <div>Bot Tira Dúvidas</div>
              <div className={styles.escrevendo}>Escrevendo...</div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.conversation3}>
        {messages?.map((message, index) => (
          <div key={index} className={message.sender === 'bot' ? styles.bot : styles.cliente}>
            <div className={styles.messageHeader}>
              <span className={message.sender === 'bot' ? styles.senderNameBot : styles.senderNameCliente}>
                {message.sender === 'bot' ? message.name : ''}
              </span>
              {message.sender === 'bot' && (
                <span className={styles.timeAtendente}>{message.time}</span>
              )}
            </div>
            <div className={message.sender === 'bot' ? styles.chat : styles.chatCliente}>
              {message.sender === 'cliente' && (
                <span className={styles.timeCliente}>{message.time}</span> 
              )}
              <div>{message.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.input}>
        <div className={styles.searchBar}>
          <span className={styles.emojiIcon}>😊</span>
          <TextField
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Escreva sua mensagem..."
            variant="outlined"
            fullWidth
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage();
              }
            }}
            sx={{
              "& fieldset": { border: "none" },
              "& .MuiInputBase-root": {
                height: "43px",
                backgroundColor: "#eaeaea",
                borderRadius: "12px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { color: "#202226" },
            }}
          />
          <span className={styles.emojiIcon}>📷</span>
          <span className={styles.emojiIcon}>📎</span>
          <span className={styles.emojiIcon}>📍</span>
        </div>
      </div>
    </div>
  );
}  

export default ConversationComponent;
