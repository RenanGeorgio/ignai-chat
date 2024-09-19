import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { WhatsAppIcon } from '../../assets/icons';

import styles from './chatbox.module.css';
import { useChat, useFetchRecipient } from '../../contexts/chat/hooks';
import type { Message } from '@contexts/chat/types';
import ChatMessage from './ChatMessage';
// import { useUser } from '../../contexts/user/hooks';

const userMock = {
  _id: '65bbe0359f84da3af601f373',
  name: 'Samuel',
  email: 'samuelmarques96@live.com',
  cpf: '255.975.630-76',
  company: 'Sam`s Company',
  createdAt: {
    $date: '2024-02-01T18:17:25.739Z',
  },
  updatedAt: {
    $date: '2024-02-01T18:17:25.739Z',
  },
  __v: 0,
  companyId: '1',
};

const ChatComponent: React.FC = () => {
  // const [messages, setMessages] = useState([]);
  const { currentChat, isMessagesLoading, messages, sendTextMessage } =
    useChat();
  // const user = useUser();
  const user = userMock;

  const { recipientUser } = useFetchRecipient(currentChat, user);

  const [newMessage, setNewMessage] = useState('');
  console.log(messages);
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // setMessages([]);
      setNewMessage('');
    }
  };

  return (
    <div className={styles.conversation}>
      <header className={styles.groupChat}>
        <div className={styles.conversation1}>
          <div className={styles.conversation2}>
            <WhatsAppIcon />
            <div className={styles.nomeEstabelecimento}>
              <div>Nome: Perim Supermercado - CNPJ: 05.026.424/0001-50</div>
              <div className={styles.escrevendo}>Escrevendo...</div>
            </div>
            <div className={styles.tempoAtendimento}>
              Tempo atendimento: 03:46
            </div>
          </div>
        </div>
      </header>
      <div className={styles.conversation3}>
        {messages?.map((message: Message, index) => {
          return (
            <ChatMessage
              key={index}
              user={recipientUser?.name} // verificar se precisa mudar depois
              message={message.text}
              timestamp={message.createdAt}
              isUser={message.senderId === user.companyId}
            />
          );
        })}
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
              '& fieldset': { border: 'none' },
              '& .MuiInputBase-root': {
                height: '43px',
                backgroundColor: '#eaeaea',
                borderRadius: '12px',
                fontSize: '14px',
              },
              '& .MuiInputBase-input': { color: '#202226' },
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

export default ChatComponent;