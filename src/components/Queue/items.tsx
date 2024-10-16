import React, { FunctionComponent, useState, useEffect, useRef, useCallback } from "react";
import {
  closestCenter,
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { useDispatch } from "react-redux";
import days from "dayjs";
        
import Grid from "../Dnd/Grid";
import SortableItem from "../Dnd/SortableItem";
import Item from "../Dnd/Item";
import { TelegramIcon } from "../../components/Icons";
// import { updateConversation } from "../../store/conversations/actions";
import { CHAT_STATUS } from "../../contexts/chat/types";
import { QueueItemLabel } from "../../types";

import styles from "./items.module.css";

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
  const [queueItems, setQueueItems] = useState<QueueItemLabel[]>(queueItemsLabel);

  const currentItemRef = useRef<QueueItemLabel | undefined>(undefined);
  const dispatch = useDispatch();
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

      if (currentItemRef.current == undefined) {
        setSelectedQueueItem(queueItem);
      }
    }
  }, [currentItemRef?.current, manual]);

  useEffect(() => {
    setQueueItems(queueItemsLabel);
  }, [queueItemsLabel]);

  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      setQueueItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over!.id);
        const newArray = arrayMove(items, oldIndex, newIndex);
        return newArray;
      });
      // console.log(queueItems)
      // dispatch(updateConversation(queueItems));
     
    }

    setActiveId(null);
  }, []);

  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  const selectedIcon = (platform: string) => {
    switch (platform) {
      case 'telegram':
        return <TelegramIcon width={20} />;
      default:
        return '💬';
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <SortableContext items={queueItems} strategy={rectSortingStrategy}>
        <Grid columns={3}>
          <div className={styles.contactContainer}>
            {queueItems?.map((queueItem: QueueItemLabel, index: number) =>
              queueItem.status === 'on' || queueItem.status === CHAT_STATUS.ACTIVE ? (
	              <SortableItem
                  key={queueItem.id}
                  id={queueItem.id.toString()}
                  date={days(queueItem.startTime).format('HH:mm - DD/MM/YYYY')}
                  platform={selectedIcon(queueItem.emoji)}
                  // index={index}
                  // handleClick={() => handleClick(index, queueItem)}
                 ></SortableItem>
                <div
                  key={index}
                  className={`${styles.contactItem} ${
                    currentItemRef.current?.id === queueItem.id ? styles.selected : ''
                  }`}
                  onClick={() => handleClick(index, queueItem)}
                 >
                   <div className={styles.statusContainer}>
                     <span className={styles.emoji}>{queueItem.emoji}</span>
                     <p className={styles.p}>{queueItem.id}</p>
                     <p className={styles.incio}>{queueItem.startTime}</p>
                     {queueItem.status && <p className={styles.statusOn}>{queueItem.status}</p>}
                     {queueItem.waitTime && <p className={styles.espera}>{queueItem.waitTime}</p>}
                   </div>
                </div>
              ) : null,
            )}
         </div>
        </Grid>
      </SortableContext>
      <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
        {activeId ? <Item id={activeId} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  );
};
