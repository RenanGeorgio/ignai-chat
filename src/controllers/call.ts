// import { getTwilioAppToken } from "@helpers/getClient";
//import { CallApi } from "@services";

const baseURL = process.env.REACT_APP_CALL_API

export type NotyfyDequeueEvent = {
  agentName: string
  company: string
  From: string | number
  To: string | number
  Caller: string
  position: string | number
}

export async function getCall(basePath: string) {
  // const token = getTwilioAppToken;
  try {
    const response = await fetch(`${baseURL}/token`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${auth}`,
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
  try {
    const response = await fetch(`${baseURL}/${basePath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(body)
    });
    
    if (response) {
      console.log(response);
      const value = await response.json();
      
      return value;
    }
   
    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function dequeueCall(body: NotyfyDequeueEvent, queue: string) {
  try {
    const response = await fetch(`${baseURL}/dequeue-incoming?queueId=${queue}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${auth}`,
      },
      body: JSON.stringify(body)
    });
    
    if (response) {
      console.log(response);
      const value = await response.json();
      
      return value;
    }
   
    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}

export async function listCalls(company: string) {
  try {
    const response = await fetch(`${baseURL}/queue/clients?company=${company}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        //Authorization: `Bearer ${auth}`,
      }
    });
    
    if (response) {
      console.log(response);
      const value = await response.json();
      
      return value;
    }
   
    return null;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}