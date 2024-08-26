import { useState, useEffect } from "react";
import { ServicesPerformed } from "@contexts/types";
import { Obj } from "@types";

// TO-DO: exemplo de objeto para INFO: 554355 início: 15:43 status: espera 03:45
// TO-DO: fazer switch para <img> para a seleção do icone apropriado
export const TicketElement = (servicePerformed: ServicesPerformed) => {
  const [serviceInfo, setServiceInfo] = useState<Obj | undefined>(undefined);

  useEffect(() => {
    if (servicePerformed != undefined) {
      setServiceInfo(servicePerformed?.info);
    }
  },[]);

  return (
    <div 
      className={isSelected 
        ? "self-stretch rounded-341xl border-darkslategray-100 border-[1px] border-solid flex flex-row items-start justify-start py-[0.875rem] px-[0.937rem] gap-[0.5rem] whitespace-nowrap"
        : "self-stretch rounded-341xl flex flex-row items-start justify-start p-[1rem] gap-[0.5rem]"
      }
    >
      <img
        className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
        alt=""
        src="/chat-1-1.svg"
      />
      <div className="flex-1 relative leading-[1.5rem] whitespace-pre-wrap shrink-0">
        {serviceInfo.toString()} | {servicePerformed?.updatedAt}
      </div>
    </div>
  );
}