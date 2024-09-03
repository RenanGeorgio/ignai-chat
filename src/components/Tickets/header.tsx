import styles from "./tickets.module.css";

export const TicketsHeader = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.messagens}>Mensagens</h1>
      <div className={styles.notification}>
        <span role="img" aria-label="search" className={styles.emoji}>
          🔍
        </span>
      </div>
    </div>
  );
}