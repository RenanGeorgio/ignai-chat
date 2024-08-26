import { useState, useEffect } from "react";
import { ServicesPerformed } from "@contexts/types";
import { Obj } from "@types";

import styles from "./tickets.module.css";

interface Props {
  index: number
  selected: number
  handleElementSelect: (value: number) => void
  servicePerformed?: ServicesPerformed
  conversation?: string // PARA TESTES
}
// TO-DO: exemplo de objeto para INFO: 554355 início: 15:43 status: espera 03:45
// TO-DO: fazer switch para <img> para a seleção do icone apropriado
export const TicketElement = ({ index, selected, handleElementSelect, servicePerformed, conversation }: Props) => {
  const [serviceInfo, setServiceInfo] = useState<Obj | undefined>(undefined);

  useEffect(() => {
    if (servicePerformed != undefined) {
      setServiceInfo(servicePerformed?.info);
    }
  },[]);

  return (
    <div
      key={index}
      className={`${styles.menuItem} ${selected === index ? styles.menuItemSelected : ''}`}
      onClick={() => handleElementSelect(index)}
    >
      <span role="img" aria-label="chat" className={styles.chatIcon}>
        💬
      </span>
      <div>
        {/*serviceInfo.toString() | servicePerformed?.updatedAt*/}
        {conversation}
        </div>
    </div>
  );
}