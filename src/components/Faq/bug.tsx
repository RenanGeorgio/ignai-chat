import React, { FunctionComponent, useState } from "react";
import styles from "./bug.module.css";

export type BugType = {
  className?: string;
};

const BugComponents: FunctionComponent<BugType> = ({ className = "" }) => {
  const [tickets, setTickets] = useState<string[]>([
    "Erro ao coletar os dados",
    "Erro no buscador"
  ]);

  const handleAddTicket = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.trim() !== "") {
      setTickets([...tickets, event.target.value]);
      event.target.value = ""; 
    }
  };

  return (
    <div className={[styles.bugContainer, className].join(" ")}>
      <div className={styles.bugHeader}>
        <h3 className={styles.bugTitle}>Relatar Bug</h3>
      </div>
      <div className={styles.bugInputContainer}>
        <textarea
          className={styles.bugInput}
          placeholder="Escreva seu problema..."
          onBlur={handleAddTicket}
        />
        <button className={styles.uploadButton} aria-label="Upload file">
          Enviar
        </button>
      </div>
      <div className={styles.bugBody}>
        <div className={styles.bugHeader}>
          <h3 className={styles.bugTitle}>Lista de Tickets</h3>
        </div>
        <div className={styles.containerBug}>
          {tickets?.map((ticket, index) => (
            <div className={styles.bugItem} key={index}>
              <div className={styles.statusBug}>
                <p className={styles.bug}>{`${index + 1}. ${ticket}`}</p>
                <span className={styles.emojiBug}>✔️</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BugComponents;