import React from "react";
import { KeypadButton } from "./KeypadButton";

import "./Dialler.module.css";

interface Props {
  number: string
  setNumber: (number: string) => void
  children?: React.ReactNode
}

export const Dialler: React.FC<Props> = ({ number, setNumber }: Props) => {
  const handleNumberChange = (event: Event) => {
    const currentEvent = event?.target as HTMLInputElement;
    setNumber(currentEvent?.value);
  };

  const handleBackSpace = () => {
    setNumber(number.substring(0, number.length - 1));
  };

  const handleNumberPressed = (newNumber: string) => {
    return () => {
      setNumber(`${number}${newNumber}`);
    };
  };

  return (
    <>
      <input
        type="tel"
        value={number}
        onChange={handleNumberChange}
        className="input"
      />
      <ol className="keypad">
        <li>
          <KeypadButton handleClick={handleNumberPressed("1")}>1</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("2")}>2</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("3")}>3</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("4")}>4</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("5")}>5</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("6")}>6</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("7")}>7</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("8")}>8</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("9")}>9</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("+")}>+</KeypadButton>
        </li>
        <li>
          <KeypadButton handleClick={handleNumberPressed("0")}>0</KeypadButton>
        </li>
        {number?.length > 0 && (
          <li>
            <KeypadButton handleClick={handleBackSpace}>&lt;&lt;</KeypadButton>
          </li>
        )}
      </ol>
    </>
  );
}