import React, { useState, useEffect } from "react";

import { useCall } from "../../contexts/call/hooks";
import { useChat } from "../../contexts/chat/hooks";

import { TicketsHeader } from "./header";
import { TicketLabel } from "./label";
import { TicketElement } from "./element";
import { Chat } from "../../contexts/chat/types";

import styles from "./tickets.module.css";

// const conversations = [
//   '554356 início: 15:45 status: on 5:27',
//   '554355 início: 15:43 status: espera 03:45',
//   '554354 início: 15:40 fim: 15:42 - ÑR',
//   '554353 início: 15:30 fim: 15:40 - R',
//   '554352 início: 15:20 fim: 15:30 - R',
//   '554351 início: 15:10 fim: 15:15 - R',
//   '554350 início: 15:06 fim: 15:13 - ÑR',
//   '554349 início: 15:01 fim: 15:05 - R',
//   '554349 início: 14:55 fim: 15:00 - R',
// ];

const TicketsComponent: React.FC = () => {
  const { servicesPerformed } = useCall(); // TO-DO: mudar para useQuery
  const { userChats, updateCurrentChat } = useChat();

  const [selected, setSelected] = useState<number>(0);
  const [ticketElements, setTicketElements] = useState<Chat[]>([]);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  useEffect(() => {
    if ((userChats != undefined) && (userChats.length)) {
      setTicketElements(userChats);
    } else {
      // @ts-ignore
      setTicketElements([]);
    }
  },[userChats]);

  console.log(userChats);
  console.log(ticketElements);
  return (
    <div className={styles.message}>
      <TicketsHeader />
      <div className={styles.conversationList}>
        <div className={styles.menu}>
          <TicketLabel />
          <div className={styles.list}>
            {ticketElements != undefined && ticketElements?.length > 0 ?
              (
                <>
                  {ticketElements?.map((conversation: Chat, index: number) => ( // verificar dps
                    <TicketElement
                      index={index}
                      selected={selected}
                      // handleElementSelect={handleSelect}
                      key={index}
                      //servicePerformed={servicePerformed} 
                      conversation={conversation}
                      updateCurrentChat={updateCurrentChat}
                    />
                  ))}
                </>
              ) : (
                <></>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketsComponent;