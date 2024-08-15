import { ChatApi } from "@services";

export async function getChat(basePath: string) {
  try {
    const response = await ChatApi(basePath, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${wb.accessToken}`,
      }
    });
    
    if (response) {
      return response;
    }
    else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function postChat(basePath: string, body: any) {
  try {
    const response = await ChatApi(basePath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${wb.accessToken}`,
      },
      data: body
    });
    
    if (response) {
      return response;
    }
    else {
      return null;
    }
  } catch (error: any) {
    console.log(error);
    return null;
  }
}