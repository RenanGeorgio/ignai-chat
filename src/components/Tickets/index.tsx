import React, { useState, useEffect, useContext } from "react";

import { useChat } from "../../contexts/chat/hooks";
import { InactiveChatsContext } from "../../contexts/chat/ChatContext";
import { TicketsHeader } from "./header";
import { TicketLabel } from "./label";
import { TicketElement } from "./element";
import { ConversationDTO } from "../../store/types";

import styles from "./tickets.module.css";


const TicketsComponent: React.FC = () => {
  const { inactiveConversations } = useContext(InactiveChatsContext);
  const { updateCurrentChat } = useChat();
  
  // popular os tickets nao ativos com usequery
  const [selected, setSelected] = useState<number>(0);
  const [ticketElements, setTicketElements] = useState<ConversationDTO[]>([]);

  const handleSelect = (index: number) => {
    setSelected(index);
  };

  useEffect(() => {
    if ((inactiveConversations != undefined) && inactiveConversations?.length) {
      setTicketElements(inactiveConversations);
    } else {
      setTicketElements([]);
    }
  }, [inactiveConversations]);

  return (
    <div className={styles.message}>
      <TicketsHeader />
      <div className={styles.conversationList}>
        <div className={styles.menu}>
          <TicketLabel />
          <div className={styles.list}>
            {ticketElements != undefined && ticketElements?.length > 0 ? (
              <>
                {ticketElements?.map(
                  (
                    conversation: ConversationDTO,
                    index: number, // verificar dps
                  ) => (
                    <TicketElement
                      index={index}
                      selected={selected}
                      // handleElementSelect={handleSelect}
                      key={index}
                      //servicePerformed={servicePerformed}
                      conversation={conversation}
                      updateCurrentChat={updateCurrentChat}
                    />
                  ),
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketsComponent;