import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { QueueItemLabel } from '../../types';

import styles from './items.module.css';
import { ChatStatus } from '../../contexts/chat/types';

export interface QueueItemsType {
  queueItemsLabel: QueueItemLabel[];
  selectItem: (item: QueueItemLabel) => void;
  manual: boolean;
  children?: React.ReactNode;
}

export const QueueItems: FunctionComponent<QueueItemsType> = ({
  queueItemsLabel,
  selectItem,
  manual,
}: QueueItemsType) => {
  const [queueItems, setQueueItems] =
    useState<QueueItemLabel[]>(queueItemsLabel);

  const currentItemRef = useRef<QueueItemLabel | undefined>(undefined);

  const setSelectedQueueItem = (queueItem: QueueItemLabel) => {
    currentItemRef.current = queueItem;
    selectItem(queueItem);
  };

  const handleClick = (index: number, queueItem: QueueItemLabel) => {
    console.log('Clicked index:', index); // TO-DO: Usar para dar highlight no item

    if (manual) {
      setSelectedQueueItem(queueItem);
    }
  };

  useEffect(() => {
    if (!manual) {
      const queueItem = queueItems[0];

      if (currentItemRef.current === undefined) {
        setSelectedQueueItem(queueItem);
      }
    }
  }, [currentItemRef?.current, manual]);

  useEffect(() => {
    setQueueItems(queueItemsLabel);
  }, [queueItemsLabel]);

  return (
    <div className={styles.contactContainer}>
      {queueItems?.map((queueItem: QueueItemLabel, index: number) =>
        queueItem.status === 'on' || queueItem.status === ChatStatus.ACTIVE ? (
          <div
            key={index}
            className={styles.contactItem}
            onClick={() => handleClick(index, queueItem)}
          >
            <div className={styles.statusContainer}>
              <span className={styles.emoji}>{queueItem.emoji}</span>
              <p className={styles.p}>{queueItem.id}</p>
              <p className={styles.incio}>{queueItem.startTime}</p>
              <p className={styles.statusOn}>{queueItem.status}</p>
              <p className={styles.espera}>{queueItem.waitTime}</p>
            </div>
          </div>
        ) : null,
      )}
    </div>
  );
};
