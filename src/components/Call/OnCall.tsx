import React, { useState } from "react";
import { Call } from "@twilio/voice-sdk";

import { useLoudness, useMuteWarning } from "../../hooks/call";
import { KeypadButton } from "./KeypadButton";

import "./OnCall.module.css";


interface Props {
  handleHangup: () => void
  connection?: Call
  children?: React.ReactNode
}

export const OnCall: React.FC<Props> = ({ handleHangup }: Props) => {
  const [muted, setMuted] = useState<boolean>(false);

  const [running, setRunning, loudness] = useLoudness();
  const [showMuteWarning] = useMuteWarning(loudness, running);

  const handleMute = () => {
    // connection.mute(!muted);
    setMuted(!muted);
    setRunning(!muted);
  };

  const muteWarning = (
    <p className="warning">Are you speaking? You are on mute!</p>
  );

  return (
    <>
      {showMuteWarning && muteWarning}
      <div className="call">
        <div className="call-options">
          <KeypadButton handleClick={handleMute} color={muted ? "red" : ""}>
            {muted ? "Unmute" : "Mute"}
          </KeypadButton>
        </div>
        <div className="hang-up">
          <KeypadButton handleClick={handleHangup} color="red">
            Hang up
          </KeypadButton>
        </div>
      </div>
    </>
  );
}