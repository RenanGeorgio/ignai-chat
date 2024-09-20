import axios from "axios";
// import https from 'https';

const CallApi = axios.create({
  baseURL: process.env.REACT_APP_CALL_API,
  //withCredentials: true,
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false
  // })
  // está causando erro no build
  //   webpack < 5 used to include polyfills for node.js core modules by default.
  // This is no longer the case. Verify if you need this module and configure a polyfill for it.

  // If you want to include a polyfill, you need to:
  //         - add a fallback 'resolve.fallback: { "https": require.resolve("https-browserify") }'
  //         - install 'https-browserify'
  // If you don't want to include a polyfill, you can use an empty module like this:
  //         resolve.fallback: { "https": false }
});

export default CallApi;