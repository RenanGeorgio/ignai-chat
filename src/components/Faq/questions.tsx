import React, { useState } from "react";
import styles from "./questions.module.css";

const questions = [
  'Como encontrar a 2° via do boleto?',
  'Qual botão pula para o próximo da fila?',
  'Como atender somente ligação?',
  'Como atender somente whatsapp?',
  'Qual o tempo máximo de espera do cliente?',
];

const QuestionsComponents: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  return (
    <div className={styles.message}>
      <div className={styles.title}>
        <h1 className={styles.messagens}>FAQ</h1>
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
          <div className={styles.hoje}>Perguntas em destaque</div>
          <div className={styles.list}>
            {questions.map((questions, index) => (
              <div
                key={index}
                className={styles.menuItemQuestion}
                onClick={() => handleSelect(index)}
              >
                <span role="img" aria-label="chat" className={styles.chatIcon}>
                  💬
                </span>
                <div>{questions}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsComponents;