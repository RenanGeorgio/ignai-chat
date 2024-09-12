import { parseCookies } from "nookies";
import { AuthApi } from "../services";

export function getClientToken(ctx?: any) {
  const { 'auth.token': token } = parseCookies(ctx);

  AuthApi.interceptors.request.use((config: any) => {
    return config;
  })

  if (token) {
    if (AuthApi.defaults.headers !== null){
      AuthApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }

  return AuthApi;
}