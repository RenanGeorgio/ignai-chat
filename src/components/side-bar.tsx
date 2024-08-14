import type { NextPage } from "next";
import CustomElement from "./custom-element";

export type SideBarType = {
  className?: string;
  chatBubble?: string;
  commandSymbol?: string;
  activity?: string;
};

const SideBar: NextPage<SideBarType> = ({
  className = "",
  chatBubble,
  commandSymbol,
  activity,
}) => {
  return (
    <div
      className={`self-stretch flex-1 overflow-hidden flex flex-col items-center justify-start pt-[2.5rem] px-[0rem] pb-[3rem] relative gap-[1.25rem] text-left text-[1.375rem] text-secondary font-caption-1 mq850:pt-[1.25rem] mq850:pb-[1.25rem] mq850:box-border mq1225:pt-[1.625rem] mq1225:pb-[1.938rem] mq1225:box-border ${className}`}
    >
      <div className="w-[5rem] h-[5.563rem]" />
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[1rem]">
        <div className="self-stretch bg-mediumslateblue border-primary border-r-[3px] border-solid flex flex-row items-center justify-center py-[1.125rem] px-[2.25rem] gap-[1.75rem]">
          <img
            className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 object-contain"
            alt=""
            src={chatBubble}
          />
          <div className="w-[11.625rem] relative leading-[2rem] font-semibold hidden mq450:text-[1.125rem] mq450:leading-[1.625rem]">
            Search
          </div>
          <div className="h-[1.75rem] rounded-3xs bg-background hidden flex-row items-center justify-start py-[0.375rem] px-[0.75rem] box-border gap-[0.25rem] text-[1rem]">
            <img
              className="h-[1rem] w-[1rem] relative overflow-hidden shrink-0 min-h-[1rem]"
              alt=""
              src={commandSymbol}
            />
            <b className="self-stretch relative leading-[1rem]">F</b>
          </div>
        </div>
        <CustomElement
          activity={activity}
          commandSymbol="/commandsymbol-1-1.svg"
        />
        <CustomElement
          activity={activity}
          commandSymbol="/commandsymbol-1-2.svg"
        />
      </div>
      <img
        className="w-[1.75rem] h-[1.75rem] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/logout.svg"
      />
      <img
        className="w-[4rem] h-[1.25rem] absolute !m-[0] top-[4.438rem] left-[0.875rem] object-cover z-[1]"
        loading="lazy"
        alt=""
        src="/black-background-1@2x.png"
      />
    </div>
  );
}

export default SideBar;