import React, { useEffect, useState } from "react";
import styles from "./answer.module.css";
import { getAnswer } from "../../controllers/dato";

interface AnswerComponentProps {
  selectedQuestionIndex: number | null;
}

const AnswerComponent: React.FC<AnswerComponentProps> = ({ selectedQuestionIndex }) => {
  const [answers, setAnswers] = useState<{ id: string; name: string }[]>([]);
  
  useEffect(() => {
    async function loadAnswers() {
      try {
        const answerData = await getAnswer();
        setAnswers(answerData || []);
      } catch (error) {
        console.error("Erro ao carregar respostas:", error);
      }
    }

    loadAnswers();
  }, []);

  const answer = selectedQuestionIndex !== null ? answers[selectedQuestionIndex] : null;

  return (
    <div className={styles.answerContainer}>
      <div className={styles.header}>
        <p>Tira dúvidas</p>
      </div>
      <div className={styles.answerText}>
        {answer ? (
          <p>{answer.name}</p>
        ) : (
          <p>{selectedQuestionIndex !== null ? "Resposta não encontrada." : "Carregando respostas..."}</p>
        )}
      </div>
    </div>
  );
}

export default AnswerComponent;
