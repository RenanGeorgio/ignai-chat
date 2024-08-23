import React, { useState } from 'react';
import styles from "../style/chatbox.module.css";
import { TextField } from '@mui/material';

const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Olá! Sou o bot de atendimento da Unimarka. Favor digitar seu nome e CNPJ ou 0 caso não seja cliente.',
      time: '11:03 AM',
    },
    {
      sender: 'bot',
      text: 'Achei seu cadastro :) Poderia me explicar em algumas palavras o motivo do contato?',
      time: '11:04 AM',
    },
    {
      sender: 'cliente',
      text: 'Meu nome é Marcelo Almeida e o CNPJ é 05.026.424/0001-50',
      time: '11:03 AM',
    },
    {
      sender: 'cliente',
      text: 'Bom dia, estou com um problema em que meu pedido está atrasado, eu chequei na plataforma e a data prevista era para o dia 23 hoje é dia 25, gostaria de saber o que aconteceu.',
      time: '11:04 AM',
    },
    {
      sender: 'bot',
      text: 'Bom dia! Me chamo Gabriel e estou aqui para lhe ajudar!!',
      time: '11:05 AM',
    },
    {
      sender: 'cliente',
      text: 'Bom dia, estou com um problema em que meu pedido está atrasado, eu chequei na plataforma e a data prevista era para o dia 23 hoje é dia 25, gostaria de saber o que aconteceu.',
      time: '11:05 AM',
    },
    {
      sender: 'bot',
      text: 'Claro! Vou entrar em contato com o time de logística para eles averiguarem o ocorrido, poderia esperar 5 minutinhos? Caso não possa esperar nós lhe enviaremos as informações por e-mail.',
      time: '11:06 AM',
    },
    {
      sender: 'bot',
      text: 'Uhmm, olhei no sistema aqui e vi que realmente o seu pedido deveria ter chegado, vou lhe passar para um de nossos atendentes para averiguarmos melhor.',
      time: '11:07 AM',
    }
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        sender: 'cliente',
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
            <div className={styles.nomePerimSupermercado}>
              Nome: Perim Supermercado - CNPJ: 05.026.424/0001-50
            </div>
            <div className={styles.address}>
              <div className={styles.escrevendo}>Escrevendo...</div>
            </div>
            <div className={styles.address1}>
              <div className={styles.tempoAtendimento0346}>
                Tempo atendimento: 03:46
              </div>
            </div>
            <input className={styles.icon} type="checkbox" />
            <div className={styles.address2}>
              <a className={styles.x}>x</a>
            </div>
          </div>
        </div>
      </header>

      <div className={styles.conversation3}>
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'bot' ? styles.bot : styles.cliente}>
            <div className={message.sender === 'bot' ? styles.chat : styles.chatCliente}>
              <div>{message.text}</div>
            </div>
            <div className={styles.time}>{message.time}</div>
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
};

export default ChatComponent;
