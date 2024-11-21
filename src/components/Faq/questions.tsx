import React, { useEffect, useState } from "react";
import { EditIcon, PesquisaIcon } from "../../assets/icons";
import styles from "./questions.module.css";
import { getQuestions } from "../../controllers/dato";

interface QuestionsComponentsProps {
  onSelectQuestion: (questionIndex: number) => void;
}

const QuestionsComponents: React.FC<QuestionsComponentsProps> = ({ onSelectQuestion }) => {
  const [questions, setQuestions] = useState<{ id: string; name: string }[]>([]);

  useEffect(() => {
    async function loadQuestions() {
      try {
        const questionsData = await getQuestions();
        setQuestions(questionsData || []);
      } catch (error) {
        console.error("Erro ao carregar perguntas:", error);
      }
    }

    loadQuestions();
  }, []);

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
            {questions.length > 0 ? (
              questions.map((question, index) => (
                <div
                  key={question.id}
                  className={styles.menuItemQuestion}
                  onClick={() => onSelectQuestion(index)}
                >
                  <span role="img" aria-label="chat" className={styles.chatIcon}>
                    💬
                  </span>
                  <div>{question.name}</div>
                </div>
              ))
            ) : (
              <p className={styles.loading}>Carregando perguntas...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionsComponents;
