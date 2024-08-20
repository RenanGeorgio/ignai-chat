import React, { useMemo, CSSProperties } from "react";

export type TitleType = {
  className?: string;
  fAQ?: string;
  icon16LineEdit?: string;
  search?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const Title: React.FC<TitleType> = ({
  className = "",
  fAQ,
  icon16LineEdit,
  search,
  propMinWidth,
}) => {
  const fAQStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch border-darkslategray-300 border-b-[1px] border-solid flex flex-row items-center justify-start pt-[2.25rem] px-[2rem] pb-[2.125rem] gap-[0.75rem] text-left text-[2rem] text-white font-body-regular mq450:flex-wrap ${className}`}
    >
      <h1
        className="m-0 flex-1 relative text-inherit leading-[2.5rem] font-semibold font-inherit inline-block min-w-[3.125rem] mq850:text-[1.625rem] mq850:leading-[2rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]"
        style={fAQStyle}
      >
        {fAQ}
      </h1>
      <div className="h-[3rem] w-[3rem] rounded-31xl border-darkslategray-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.687rem]">
        {icon16LineEdit && (
          <img
            className="h-[1.5rem] w-[1.5rem] relative"
            loading="lazy"
            alt=""
            src={icon16LineEdit}
          />
        )}
      </div>
      <div className="h-[3rem] w-[3rem] rounded-31xl border-darkslategray-300 border-[1px] border-solid box-border flex flex-row items-center justify-center py-[0.75rem] px-[0.687rem]">
        {search && (
          <img
            className="h-[1.5rem] w-[1.5rem] relative"
            loading="lazy"
            alt=""
            src={search}
          />
        )}
      </div>
    </div>
  );
};

export default Title;
