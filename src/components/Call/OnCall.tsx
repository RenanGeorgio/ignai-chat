import React, { useState } from "react";
import { Call } from "@twilio/voice-sdk";

import { useLoudness, useMuteWarning } from "../../hooks/call";
import { KeypadButton } from "./KeypadButton";
import { Timer } from "../timer";

import "./OnCall.module.css";


interface Props {
  connection?: Call | null
}

export const OnCall: React.FC<Props> = () => {
  const [muted, setMuted] = useState<boolean>(false);

  const [running, setRunning, loudness] = useLoudness();
  const [showMuteWarning] = useMuteWarning(loudness as number, running as boolean);

  const handleMute = () => {
    // connection.mute(!muted);
    setMuted(!muted);
    setRunning(!muted);
  };

  const muteWarning = (
    <p className="warning">Você está falando? Você está no mudo!</p>
  );
  
  return (
    <>
      <Timer />
      {showMuteWarning && muteWarning}
      <div className="call">
        <div className="call-options">
          <KeypadButton handleClick={handleMute} color={muted ? "red" : ""}>
            {muted ? "Unmute" : "Mute"}
          </KeypadButton>
        </div>
      </div>
    </>
  );
}