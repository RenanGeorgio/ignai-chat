import React, { useState, useEffect } from "react";

import { CallProvider, QueueProvider } from "../../call/provider";
import { ChatProvider } from "../../chat/provider";
import { TimeProvider } from "../../time/provider";
import { CommunicationContext } from "../CommunicationContext";

import { COMM_STATE } from "../types";
import { CONVERSATION_CHANNEL } from "../../../types";

function AppProviders({ children }: { children: React.ReactNode }) {
  const [workerStatus, setWorkerStatus] = useState<COMM_STATE>(COMM_STATE.OFFLINE);
  const [workerPlataform, setWorkerPlataform] = useState<CONVERSATION_CHANNEL | null>(CONVERSATION_CHANNEL.DEFAULT);

  const handleWorkerStatusChange = (value: COMM_STATE, channel?: CONVERSATION_CHANNEL) => {
    if (value !== COMM_STATE.BUSY) {
      setWorkerPlataform(null);
    } else {
      if (channel) {
        setWorkerPlataform(channel);
      } else {
        setWorkerPlataform(CONVERSATION_CHANNEL.DEFAULT);
      }
    }

    setWorkerStatus(value);
  };

  useEffect(() => {
    setWorkerStatus(COMM_STATE.READY);
  },[]);

  return (
    <CommunicationContext.Provider value={{ workerPlataform }}>
      <ChatProvider workerStatus={workerStatus} setWorkerStatus={handleWorkerStatusChange}>
        <QueueProvider workerStatus={workerStatus} setWorkerStatus={handleWorkerStatusChange}>
          <CallProvider workerStatus={workerStatus} setWorkerStatus={handleWorkerStatusChange}>
            {children}
          </CallProvider>
        </QueueProvider>
      </ChatProvider>
    </CommunicationContext.Provider>
  );
}

export function CommunicationProviders({ children }: { children: React.ReactNode }) {
  return (
    <TimeProvider>
      <AppProviders>
        {children}
      </AppProviders>
    </TimeProvider>
  );
}