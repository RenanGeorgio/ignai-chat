import React from "react";
import { Call } from "@twilio/voice-sdk";

import { useCall } from "../../contexts/call/hooks";
import { USER_STATE } from "../../types";

import "./FakeState.module.css";

interface Props {
  currentState: USER_STATE
  setConn: (conn: Call | undefined) => void
  children?: React.ReactNode
}

export const FakeState: React.FC<Props> = ({ currentState, setConn }: Props) => {
  const { setUserState } = useCall();
  
  const handleChange = (event: Event) => {
    // @ts-ignore
    const newState = USER_STATE[event?.target?.value];
    setUserState(newState);
    
    if (newState === USER_STATE.INCOMING || newState === USER_STATE.ON_CALL) {
      //setConn(true);
    } else {
      setConn(undefined);
    }
  };

  const checkboxes = Object.keys(USER_STATE).map(stateKey => {
    return (
      <>
        <label htmlFor={stateKey}>{USER_STATE[stateKey]}</label>
        <input
          type="radio"
          name="fake-state"
          value={stateKey}
          id={stateKey}
          checked={currentState === USER_STATE[stateKey]}
          onChange={handleChange}
        ></input>
      </>
    );
  });

  return (
    <div className="fake-state">{checkboxes}</div>
  );
}