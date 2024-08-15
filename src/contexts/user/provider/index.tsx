import React from "react";
import { UserContext } from "../UserContext";
import { User } from "../types";

export function UserProvider({ children, user }: { children: React.ReactNode, user: User }) {
  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
}