import React, { useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { getVoiceToken } from "../../../controllers/token";
import { User } from "../types";


const user_ = {
  _id: '65bbe0359f84da3af601f373',
  name: 'Samuel',
  email: 'samuelmarques96@live.com',
  cpf: '255.975.630-76',
  company: 'Sam`s Company',
  createdAt: {
    $date: '2024-02-01T18:17:25.739Z',
  },
  updatedAt: {
    $date: '2024-02-01T18:17:25.739Z',
  },
  __v: 0,
  companyId: '1',
};


/**
 * Get a {@link Location}'s query parameters.
 * @param {Location} location
 * @returns {Map<string, Array<string>>} queryParameters
 */
function getQueryParameters(location: Location) {
  return (location.search.split('?')[1] || '').split('&').reduce((queryParameters, keyValuePair) => {
    let [key, value] = keyValuePair.split('=');
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    queryParameters.set(key, (queryParameters.get(key) || []).concat([value]));
    return queryParameters;
  }, new Map());
}

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [twilioToken, setTwilioToken] = useState<string | undefined>(undefined);
  const user: User = user_;

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await getVoiceToken(user?.name);
        if (response) {
          console.log(response);
          setTwilioToken(response);
        }
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