import React from "react";

import { CallProvider } from "../call/provider";
import { ChatProvider } from "../chat/provider";
import { TimeProvider } from "../time/provider";

export function CommunicationProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TimeProvider>
      <ChatProvider>
        <CallProvider>{children}</CallProvider>
      </ChatProvider>
    </TimeProvider>
  );
}
