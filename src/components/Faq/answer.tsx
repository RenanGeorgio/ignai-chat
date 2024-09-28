import React from "react";
import styles from "./answer.module.css";

interface AnswerComponentProps {
  selectedQuestionIndex: number | null;
}

const answers = [
  'Você pode encontrar a 2ª via do boleto acessando a área de pagamentos em seu painel.',
  'Use o botão "Próximo" para pular para o próximo da fila.',
  'Para atender somente ligações, vá ao painel de controle e selecione a opção "Somente ligação".',
  'Para atender somente WhatsApp, configure a opção no painel de atendimento.',
  'O tempo máximo de espera do cliente é de 10 minutos.',
];

const AnswerComponent: React.FC<AnswerComponentProps> = ({ selectedQuestionIndex }) => {
  return (
    <div className={styles.answerContainer}>
      <div className={styles.header}>
        <p>Tira dúvidas</p>
      </div>
      <div className={styles.answerText}>
        {selectedQuestionIndex !== null ? (
          <p>{answers[selectedQuestionIndex]}</p>
        ) : (
          <p>Selecione uma pergunta para ver a resposta.</p>
        )}
      </div>
    </div>
  );
}

export default AnswerComponent;
