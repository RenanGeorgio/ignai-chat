import { FunctionComponent } from "react";
import styles from "../style/bug.module.css";

export type BugType = {
  className?: string;
};

const BugComponets: FunctionComponent<BugType> = ({ className = "" }) => {
  return (
    <div className={[styles.bugContainer, className].join(" ")}>
      <div className={styles.bugHeader}>
        <h3 className={styles.bugTitle}>Relatar Bug</h3>
      </div>
      <div className={styles.bugBody}>
        <div className={styles.bugHeader}>
          <h3 className={styles.bugTitle}>Lista de Tickets</h3>
        </div>
        <div className={styles.containerBug}>
          <div className={styles.bugItem}>          
            <div className={styles.statusBug}>
              <p className={styles.bug}>{`1. Erro ao coletar os dados`}</p>
              <span className={styles.emojiBug}>🎧</span>  
            </div>
          </div>
          <div className={styles.bugItem}>          
            <div className={styles.statusBug}>
              <p className={styles.bug}>{`2. Erro no buscador`}</p>
              <span className={styles.emojiBug}>🎧</span>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BugComponets;
