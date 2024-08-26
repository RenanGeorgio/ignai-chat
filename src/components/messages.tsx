import React, { useState } from 'react';
import styles from "../style/message.module.css";

const MessageComponent: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className={styles.message}>
      <div className={styles.title}>
        <h1 className={styles.messagens}>Mensagens</h1>
        <div className={styles.notification}>
          <span role="img" aria-label="edit" className={styles.emoji}>
            ✏️
          </span>
        </div>
        <div className={styles.notification}>
          <span role="img" aria-label="search" className={styles.emoji}>
            🔍
          </span>
        </div>
      </div>
      <div className={styles.conversationList}>
        <div className={styles.menu}>
          <div className={styles.hoje}>Hoje</div>
          <div className={styles.list}>
            {conversations.map((conversation, index) => (
              <div
                key={index}
                className={`${styles.menuItem} ${selected === index ? styles.menuItemSelected : ''}`}
                onClick={() => handleSelect(index)}
              >
                <span role="img" aria-label="chat" className={styles.chatIcon}>
                  💬
                </span>
                <div>{conversation}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const conversations = [
  '554356 início: 15:45 status: on 5:27',
  '554355 início: 15:43 status: espera 03:45',
  '554354 início: 15:40 fim: 15:42 - ÑR',
  '554353 início: 15:30 fim: 15:40 - R',
  '554352 início: 15:20 fim: 15:30 - R',
  '554351 início: 15:10 fim: 15:15 - R',
  '554350 início: 15:06 fim: 15:13 - ÑR',
  '554349 início: 15:01 fim: 15:05 - R',
  '554349 início: 14:55 fim: 15:00 - R',
];

export default MessageComponent;
