import React, { useMemo, type CSSProperties } from "react";
import '../style/frameComponent.css';

export type FrameComponentType = {
  className?: string;
  headphones?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propPadding1?: CSSProperties["padding"];
};

const FrameComponent: React.FC<FrameComponentType> = ({
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
      className={`container ${className}`}
      style={frameDivStyle}
    >
      <div className="innerContainer" />
      <img className="image" alt="" src={headphones} />
      <div className="textContainer" style={frameDiv1Style}>
        <div className="text">
          <p className="m-0 whitespace-pre-wrap">{`554356   `}</p>
          <p className="m-0 whitespace-pre-wrap">{`início: 15:00 `}</p>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
