import React from "react";

import "./KeypadButton.module.css";

interface Props {
  handleClick: (state?: any) => any
  color?: string
  children?: React.ReactNode
}

export const KeypadButton: React.FC<Props> = ({ handleClick, color = "", children }: Props) => {
  return (
    <button className={`keypad-button ${color}`} onClick={handleClick}>
      {children}
    </button>
  );
}