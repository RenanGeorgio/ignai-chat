// import { parseCookies } from "nookies";
// import { ChatApi, AuthApi } from "../services";

export function getClientToken(ctx?: any) {
  // const { 'auth.token': token } = parseCookies(ctx);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWJiZTAzNTlmODRkYTNhZjYwMWYzNzMifQ.kDH1o74vbiZgnYvNhBfQuFYIf8F4JlLVBLb3TIW1uKc';

  // ChatApi.interceptors.request.use((config) => {
  //   console.log(`Bearer ${token}`)
  //   config.headers['Authorization'] = `Bearer ${token}`;
  //   return config;
  // })

  // if (token) {
  //   if (AuthApi.defaults.headers !== null){
  //     AuthApi.defaults.headers['Authorization'] = `Bearer ${token}`;
  //   }
  // }

  // return ChatApi;

  return token;
}

export function getClientAuthToken(ctx?: any) {
  /*
  const { 'auth.token': token } = parseCookies(ctx);

  AuthApi.interceptors.request.use((config: any) => {
    return config;
  })

  if (token) {
    if (AuthApi.defaults.headers !== null){
      AuthApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  return AuthApi;*/
  return {}
}