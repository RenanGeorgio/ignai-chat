import React, { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { getVoiceToken } from "@controllers/token";
import { User } from "../types";

/**
 * Get a {@link Location}'s query parameters.
 * @param {Location} location
 * @returns {Map<string, Array<string>>} queryParameters
 */
function getQueryParameters(location: Location) {
  return (location.search.split('?')[1] || '').split('&').reduce((queryParameters, keyValuePair) => {
    var [key, value] = keyValuePair.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    queryParameters.set(key, (queryParameters.get(key) || []).concat([value]));
    return queryParameters;
  }, new Map());
}

export function UserProvider({ children, user }: { children: React.ReactNode, user: User }) {
  const [twilioToken, setTwilioToken] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await getVoiceToken(user?.name);
        setTwilioToken(response);
      } catch (error: any) {
        const token = (getQueryParameters(window.location).get('token') || [])[0] || '';
        setTwilioToken(token);
      }
    };

    fetchToken();
  }, []);

  return (
    <UserContext.Provider value={{ user, twilioToken }}>
      {children}
    </UserContext.Provider>
  );
}