import type { NextPage } from "next";

export type ElementType = {
  className?: string;
  activity?: string;
  commandSymbol1?: string;
};

const CustomElement: NextPage<ElementType> = ({
  className = "",
  activity,
  commandSymbol1,
}) => {
  return (
    <div
      className={`rounded-3xs flex flex-row items-center justify-center py-[1.125rem] px-[2.25rem] gap-[1.75rem] text-left text-[1.375rem] text-secondary font-caption-1 ${className}`}
    >
      <img
        className="h-[1.75rem] w-[1.75rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={activity}
      />
      <div className="w-[11.625rem] relative leading-[2rem] font-semibold hidden mq450:text-[1.125rem] mq450:leading-[1.625rem]">
        Manage subcription
      </div>
      <div className="rounded-3xs bg-background hidden flex-row items-center justify-start py-[0.375rem] px-[0.75rem] gap-[0.25rem] text-[1rem]">
        <img
          className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0"
          alt=""
          src={commandSymbol1}
        />
        <b className="relative leading-[1rem]">F</b>
      </div>
    </div>
  );
};

export default CustomElement;