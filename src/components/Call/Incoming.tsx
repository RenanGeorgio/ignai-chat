import React from "react";
import { Device, Call } from "@twilio/voice-sdk";

interface Props {
  connection: Call
  device?: Device
  children?: React.ReactNode
}

export const Incoming: React.FC<Props> = ({ connection }: Props) => {
  const acceptConnection = () => {
    console.log('accept connection');
    connection.accept();
  };

  const rejectConnection = () => {
    console.log('reject connection');
    connection.reject();
  };

  return (
    <>
      <button onClick={acceptConnection}>Accept</button>
      <button onClick={rejectConnection}>Reject</button>
    </>
  );
}