import React from "react";
import "../style/customElement.css";

export type ElementType = {
  className?: string;
  activity?: string;
  commandSymbol1?: string;
};

const CustomElement: React.FC<ElementType> = ({
  className = "",
  activity,
  commandSymbol1,
}) => {
  return (
    <div className={`container ${className}`}>
      <img className="image" loading="lazy" alt="" src={activity} />
      <div className="text">Manage subscription</div>
      <div className="iconContainer">
        <img className="icon" alt="" src={commandSymbol1} />
        <b className="iconText">F</b>
      </div>
    </div>
  );
};

export default CustomElement;
