import React, { useState, useEffect } from "react";

import { CallProvider } from "../call/provider";
import { ChatProvider } from "../chat/provider";
import { TimeProvider } from "../time/provider";
import { useCall } from "../call/hooks";
import { useChat } from "../chat/hooks";
import { CommunicationContext } from "./CommunicationContext";
import { COMM_STATE } from "./types";

function AppProviders({ children }: { children: React.ReactNode }) {
  const [workerStatus, setWorkerStatus] = useState<COMM_STATE>(COMM_STATE.OFFLINE);
  const [workerPlataform, setWorkerPlataform] = useState();

  const handleWorkerStatusChange = (value: COMM_STATE) => {
    setWorkerStatus(value);
  };

  useEffect(() => {
    setWorkerStatus(COMM_STATE.READY);
  },[]);

  return (
    <CommunicationContext.Provider value={{}}>
      <ChatProvider workerStatus={workerStatus} setWorkerStatus={handleWorkerStatusChange}>
        <CallProvider workerStatus={workerStatus} setWorkerStatus={handleWorkerStatusChange}>
          {children}
        </CallProvider>
      </ChatProvider>
    </CommunicationContext.Provider>
  );
}

export function CommunicationProviders({ children }: { children: React.ReactNode }) {
  const { userState, setUserState } = useCall();
  const {} = useChat();

  return (
    <TimeProvider>
      <AppProviders>
        {children}
      </AppProviders>
    </TimeProvider>
  );
}