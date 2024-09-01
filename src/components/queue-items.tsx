import { FunctionComponent } from "react";
import styles from "../style/queueItems.module.css";

export type QueueItemsType = {
  className?: string;
};

const QueueItems: FunctionComponent<QueueItemsType> = ({ className = "" }) => {
  return (
    <div className={[styles.queueItems, className].join(" ")}>
      <div className={styles.queueHeadings}>
        <h3 className={styles.filaDeAtendimento}>Fila de atendimento</h3>
      </div>
      <div className={styles.queueContacts}>
        <div className={styles.contactContainer}>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`554356`}</p>
              <p className={styles.incio}>{`Início: 15:45`}</p>
              <p className={styles.statusOn}>{`Status: on`}</p>
              <p className={styles.espera}>Espera: 01:30</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`421386`}</p>
              <p className={styles.incio}>{`Início: 12:15`}</p>
              <p className={styles.statusOn}>{`Status: on`}</p>
              <p className={styles.espera}>Espera: 02:40</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`111313`}</p>
              <p className={styles.incio}>{`Início: 13:00`}</p>
              <p className={styles.statusOn}>{`Status: off`}</p>
              <p className={styles.espera}>Espera: 00:30</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`135646`}</p>
              <p className={styles.incio}>{`Início: 11:45`}</p>
              <p className={styles.statusOn}>{`Status: off`}</p>
              <p className={styles.espera}>Espera: 01:00</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`567946`}</p>
              <p className={styles.incio}>{`Início: 08:00`}</p>
              <p className={styles.statusOn}>{`Status: on`}</p>
              <p className={styles.espera}>Espera: 00:45</p>
            </div>
          </div>
          <div className={styles.contactItem}>          
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>🎧</span>  
              <p className={styles.p}>{`7865135`}</p>
              <p className={styles.incio}>{`Início: 13:15`}</p>
              <p className={styles.statusOn}>{`Status: on`}</p>
              <p className={styles.espera}>Espera: 12:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QueueItems;
