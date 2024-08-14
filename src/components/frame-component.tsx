import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponentType = {
  className?: string;
  headphones?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  headphones,
  propPadding,
  propGap,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={`flex-1 rounded-3xl bg-silver-200 flex flex-col items-start justify-start pt-[0.687rem] pb-[1.812rem] pl-[0.562rem] pr-[0.437rem] box-border gap-[0.937rem] min-w-[9.875rem] text-left text-[0.875rem] text-ghostwhite font-body-regular ${className}`}
      style={frameDivStyle}
    >
      <div className="w-[10.625rem] h-[11.063rem] relative rounded-3xl bg-silver-200 hidden" />
      <img
        className="w-[1.938rem] h-[1.625rem] relative z-[1]"
        alt=""
        src={headphones}
      />
      <div
        className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.5rem] pr-[0rem]"
        style={frameDiv1Style}
      >
        <div className="flex-1 relative leading-[1.5rem] shrink-0 z-[1]">
          <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`início: 15:45  `}</p>
          <p className="m-0">{`status: on `}</p>
          <p className="m-0">Espera: 05:27</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;