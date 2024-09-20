import React from "react";

import { CallProvider } from "../call/provider";
import { ChatProvider } from "../chat/provider";

export function CommunicationProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChatProvider>
      <CallProvider>
        {children}
      </CallProvider>
    </ChatProvider>
  );
}