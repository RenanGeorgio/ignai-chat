import React, { useState, useEffect } from "react";
import { Device, Call } from "@twilio/voice-sdk";
import { useCall } from "../../contexts/call/hooks";
import { Dialler } from "./Dialler";
import { KeypadButton } from "./KeypadButton";
import { Incoming } from "./Incoming";
import { OnCall } from "./OnCall";
import { FakeState } from "./FakeState";
import { USER_STATE } from "../../types";

import "./Phone.module.css";

export const Phone: React.FC = () => {
  const { getDevice, userState } = useCall();

  const [number, setNumber] = useState<string>("");
  const [conn, setConn] = useState<Call | undefined>(undefined);
  const [device, setDevice] = useState<Device | undefined>(undefined);

  const handleCall = () => {
    const phone = getDevice();
    setDevice(phone); // STATE TBM É IMPORTANTE
  };

  const handleHangup = () => {
    device?.disconnectAll();
    device?.destroy();
    setDevice(undefined);
  };

  useEffect(() => {
    const startCall = async () => {
      if (device == undefined) {
        return
      }

      const call = await device.connect({ To: number });

      if (call) {
        setConn(call);
      }
    }
    startCall();
  },[device]);

  let render;
  if (conn) {
    if (userState === USER_STATE.INCOMING) {
      render = <Incoming device={device} connection={conn}></Incoming>;
    } else if (userState === USER_STATE.ON_CALL) {
      render = <OnCall handleHangup={handleHangup} connection={conn}></OnCall>;
    }
  } else {
    render = (
      <>
        <Dialler number={number} setNumber={setNumber}></Dialler>
        <div className="call">
          <KeypadButton handleClick={handleCall} color="green">
            Call
          </KeypadButton>
        </div>
      </>
    );
  }

  return (
    <>
      <FakeState
        currentState={userState}
        setConn={setConn}
      ></FakeState>
      {render}
      <p className="status">{userState}</p>
    </>
  );
}