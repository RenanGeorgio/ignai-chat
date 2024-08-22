import React from "react";
import '../style/input.css';

export type InputType = {
  className?: string;
  rightIcon?: string;
};

const Input: React.FC<InputType> = ({ className = "", rightIcon }) => {
  return (
    <div className={`container ${className}`}>
      <div className="innerContainer">
        <img className="image" alt="" src={rightIcon} />
        <div className="text">Add a note</div>
        <img className="icon" alt="" src="/plus.svg" />
      </div>
    </div>
  );
};

export default Input;
