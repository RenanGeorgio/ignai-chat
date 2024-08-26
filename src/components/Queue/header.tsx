import { QueueLabel } from "./label"

export const QueueHeader = () => {
  return (
    <div className="self-stretch border-line border-b-[1px] border-solid flex flex-row items-start justify-start pt-[2.125rem] px-[0.5rem] pb-[1.75rem] [row-gap:20px] mq450:flex-wrap">
      <QueueLabel />
      <img
        className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
        alt=""
        src="/video-2.svg"
      />
    </div>
  );
}