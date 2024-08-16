import QueueItems from "./items";
import { QueueHeader } from "./header";

export const QueueComponent = () => {
  return (
    <div className="w-[25.75rem] bg-white border-line border-l-[1px] border-solid box-border flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[14.687rem] gap-[1.25rem] max-w-full text-center text-[1.25rem] text-black font-body-regular mq850:pb-[6.188rem] mq850:box-border mq1225:pb-[9.563rem] mq1225:box-border">
      <QueueHeader />
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[1.75rem] box-border max-w-full">
        <QueueItems />
      </div>
    </div>
  );
}