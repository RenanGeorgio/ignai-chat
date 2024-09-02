import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { setLocalApiKey, setLocalRecentDocs } from "@controllers";
import { RootState } from "@store/store";
import { setApiKey, setChunks, setPrompt, setSelectedDocs, setTokenLimit } from "./actions";

const prefListenerMiddleware = createListenerMiddleware();

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setApiKey),
  effect: (action: any, listenerApi: any) => {
    setLocalApiKey((listenerApi.getState() as RootState).preference.apiKey);
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setSelectedDocs),
  effect: (action: any, listenerApi: any) => {
    setLocalRecentDocs(
      (listenerApi.getState() as RootState).preference.selectedDocs ?? null,
    );
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setPrompt),
  effect: (action: any, listenerApi: any) => {
    localStorage.setItem(
      'DocsGPTPrompt',
      JSON.stringify((listenerApi.getState() as RootState).preference.prompt),
    );
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setChunks),
  effect: (action: any, listenerApi: any) => {
    localStorage.setItem(
      'DocsGPTChunks',
      JSON.stringify((listenerApi.getState() as RootState).preference.chunks),
    );
  },
});

prefListenerMiddleware.startListening({
  matcher: isAnyOf(setTokenLimit),
  effect: (action: any, listenerApi: any) => {
    localStorage.setItem(
      'DocsGPTTokenLimit',
      JSON.stringify(
        (listenerApi.getState() as RootState).preference.token_limit,
      ),
    );
  },
});

export {
  prefListenerMiddleware
}