import { EditIcon, PesquisaIcon } from "../../assets/icons";
import styles from "./tickets.module.css";

export const TicketsHeader = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.messagens}>Mensagens</h1>
      <div className={styles.emojisContainer}>
        <div className={styles.notification}>
          <EditIcon />
        </div>
        <div className={styles.notification}>
          <PesquisaIcon />
        </div>
      </div>
    </div>
  );
};
