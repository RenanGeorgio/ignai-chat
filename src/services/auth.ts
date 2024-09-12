import axios from "axios";
// import https from "https";
// import { parseCookies } from "nookies";

// import { baseUrl } from "@config";

const AuthApi = axios.create({
//  baseURL: baseUrl,
  withCredentials: true,
  // httpsAgent: new https.Agent({  
  //   rejectUnauthorized: false
  // })
}); 
/*
AuthApi.interceptors.request.use(
  config => {
    const { 'token': token } = parseCookies();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => Promise.reject(error)
);
*/
export default AuthApi;