import { getToken } from "@helpers/getClient";
import { ChatApi } from "@services";

export async function getChat(basePath: string) {
  const token = getToken;
  try {
    const response = await ChatApi(basePath, {
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

export async function postChat(basePath: string, body: any) {
  const token = getToken;
  try {
    const response = await ChatApi(basePath, {
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