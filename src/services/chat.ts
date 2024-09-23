import axios from "axios";
// import https from "https";

const ChatApi = axios.create({
  baseURL: process.env.REACT_APP_CHAT_API + '/v1',
  // withCredentials: true,
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
}); 

export default ChatApi;