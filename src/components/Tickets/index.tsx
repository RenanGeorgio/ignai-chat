import { useCall } from "@contexts/call/hooks";
import { TicketElement } from "./element";
import { TicketsHeader } from "./header";
import { TicketLabel } from "./label";
import { ServicesPerformed } from "@contexts/types";

export const TicketsComponent = () => {
  const { servicesPerformed } = useCall();
  
  return (
    <div className="w-[26.75rem] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[7.5rem] box-border min-w-[26.75rem] max-w-full mq850:pb-[3.188rem] mq850:box-border mq850:min-w-full mq1225:flex-1 mq1225:pb-[4.875rem] mq1225:box-border">
      <TicketsHeader />
      <div className="self-stretch flex flex-col items-start justify-start pt-[2.5rem] px-[0rem] pb-[0rem] text-[0.875rem] text-gray-2 mq450:gap-[1.25rem]">
        <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[2rem] pb-[19.75rem] gap-[1rem] mq850:pb-[8.313rem] mq850:box-border mq1225:pb-[12.813rem] mq1225:box-border">
          <TicketLabel />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem] text-white">
            {servicesPerformed.map((servicePerformed: ServicesPerformed) => {
              <TicketElement servicePerformed={servicePerformed} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}