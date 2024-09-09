// import { getToken } from "@helpers/getClient";
import { CallApi } from "@services";

export async function getVoiceToken(userName: string) {
  // const auth = getToken;
  try {
    const response = await CallApi('/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${auth}`,
      },
      data: {
        identity: userName
      }
    });
    
    if (response) {
      const token = response.data.token
      return token;
    }
   
    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}