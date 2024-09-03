import React, { FunctionComponent, useState, useEffect } from "react";
import { QueueItemLabel } from "../../types";

import styles from "./items.module.css";

export interface QueueItemsType {
  queueItemsLabel: QueueItemLabel[]
  children?: React.ReactNode
};

export const QueueItems: FunctionComponent<QueueItemsType> = ({ queueItemsLabel }: QueueItemsType) => {
  const [queueItems, setQueueItems] = useState<QueueItemLabel[]>(queueItemsLabel);

  useEffect(() => {
    setQueueItems(queueItemsLabel);
  },[queueItemsLabel]);

  return (
    <div className={styles.contactContainer}>
      {queueItems.map((queueItem: QueueItemLabel, index: number) => (
        <div key={index} className={styles.contactItem}>          
          <div className={styles.statusContainer}>
            <span className={styles.emoji}>queueItem.emoji</span>  
            <p className={styles.p}>queueItem.id</p>
            <p className={styles.incio}>queueItem.startTime</p>
            <p className={styles.statusOn}>queueItem.status</p>
            <p className={styles.espera}>queueItem.waitTime</p>
          </div>
        </div>
      ))}
    </div>
  );
}