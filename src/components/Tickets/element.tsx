import { useState, useEffect } from "react";

import { useFetchRecipient } from "../../contexts/chat/hooks";
import { useUser } from "../../contexts/user/hooks";
import { ServicesPerformed } from "../../contexts/types";
import { ConversationDTO } from "../../store/types";
import { Chat, Obj } from "../../types";

import styles from "./tickets.module.css";

interface Props {
  index: number;
  selected: number;
  // handleElementSelect: (value: number) => void
  servicePerformed?: ServicesPerformed;
  updateCurrentChat: (value: Chat) => void;
  conversation: ConversationDTO;
}
// TO-DO: exemplo de objeto para INFO: 554355 início: 15:43 status: espera 03:45
// TO-DO: fazer switch para <img> para a seleção do icone apropriado
export const TicketElement = ({
  index,
  selected,
  updateCurrentChat,
  servicePerformed,
  conversation,
}: Props) => {
  const [serviceInfo, setServiceInfo] = useState<Obj | undefined>(undefined);
  const { user } = useUser();
  const { recipientUser } = useFetchRecipient(conversation?.conversation, user);
  console.log(recipientUser)
  useEffect(() => {
    if (servicePerformed != undefined) {
      setServiceInfo(servicePerformed?.info);
    }
  }, []);

  return (
    <div
      key={index}
      className={`${styles.menuItem} ${
        selected === index ? styles.menuItemSelected : ''
      }`}
      onClick={() => {
        // @ts-ignore
        updateCurrentChat(conversation?.conversation)
      }}
    >
      <span role="img" aria-label="chat" className={styles.chatIcon}>
        💬
      </span>
      <div>
        {/*serviceInfo.toString() | servicePerformed?.updatedAt*/}
        {recipientUser?.name}
      </div>
    </div>
  );
}