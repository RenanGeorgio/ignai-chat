import React, { useMemo, CSSProperties } from "react";

import "./title.module.css"; 

export type TitleType = {
  className?: string;
  fAQ?: string;
  icon16LineEdit?: string;
  search?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
}

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
    <div className={`container ${className}`}>
      <h1 className={`h1 mq850 mq450`} style={fAQStyle}>
        {fAQ}
      </h1>
      <div className="iconButton">
        {icon16LineEdit && (
          <img className="icon" loading="lazy" alt="" src={icon16LineEdit} />
        )}
      </div>
      <div className="iconButton">
        {search && (
          <img className="icon" loading="lazy" alt="" src={search} />
        )}
      </div>
    </div>
  );
}

export default Title;