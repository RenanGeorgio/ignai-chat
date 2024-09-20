// import { getToken } from "@helpers/getClient";
//import { CallApi } from "../services";

const baseURL = process.env.REACT_PUBLIC_CALL_API

export async function getVoiceToken(userName: string) {
  // const auth = getToken;
  try {
    const response = await fetch(`${baseURL}/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify({ identity: userName })
    });
    
    if (response) {
      console.log(response);
      const token = await response.json();
      
      return token;
    }
   
    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}