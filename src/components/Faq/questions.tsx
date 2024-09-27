import React from "react";
import { EditIcon, PesquisaIcon } from "../../assets/icons";
import styles from "./questions.module.css";

const questions = [
  'Como encontrar a 2° via do boleto?',
  'Qual botão pula para o próximo da fila?',
  'Como atender somente ligação?',
  'Como atender somente whatsapp?',
  'Qual o tempo máximo de espera do cliente?',
];

interface QuestionsComponentsProps {
  onSelectQuestion: (index: number) => void;
}

const QuestionsComponents: React.FC<QuestionsComponentsProps> = ({ onSelectQuestion }) => {

  return (
    <div className={styles.message}>
      <div className={styles.title}>
        <h1 className={styles.messagens}>FAQ</h1>
        <div className={styles.notification}>
          <EditIcon />
        </div>
        <div className={styles.notification}>
          <PesquisaIcon />
        </div>
      </div>
      <div className={styles.conversationList}>
        <div className={styles.menu}>
          <div className={styles.hoje}>Perguntas em destaque</div>
          <div className={styles.list}>
            {questions?.map((question, index) => (
              <div
                key={index}
                className={styles.menuItemQuestion}
                onClick={() => onSelectQuestion(index)}
              >
                <span role="img" aria-label="chat" className={styles.chatIcon}>
                  💬
                </span>
                <div>{question}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsComponents;
