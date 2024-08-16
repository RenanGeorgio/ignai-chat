import axios from "axios";
import https from "https";

const CallApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CALL_API,
  withCredentials: true,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
}); 

export default CallApi;