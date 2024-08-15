import axios from "axios";
import https from 'https';

const ChatApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CHAT_API,
  withCredentials: true,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
}); 

export default ChatApi;