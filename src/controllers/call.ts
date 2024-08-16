import { getTwilioAppToken } from "@helpers/getClient";
import { CallApi } from "@services";

export async function getCall(basePath: string) {
  const token = getTwilioAppToken;
  try {
    const response = await CallApi(basePath, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }
    });
    
    if (response) {
      return response;
    }

    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function postCall(basePath: string, body: any) {
  const token = getTwilioAppToken;
  try {
    const response = await CallApi(basePath, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: body
    });
    
    if (response) {
      return response;
    }
   
    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}