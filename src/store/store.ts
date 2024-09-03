import { configureStore } from "@reduxjs/toolkit";
import { conversationsReducer } from "./conversations/slice";

const key = localStorage.getItem('DocsGPTApiKey');
const prompt = localStorage.getItem('DocsGPTPrompt');
const chunks = localStorage.getItem('DocsGPTChunks');
const token_limit = localStorage.getItem('DocsGPTTokenLimit');
const doc = localStorage.getItem('DocsGPTRecentDocs');

const isDev = true //process.env.NODE_END == 'development';

export const store = configureStore({
  preloadedState: {
  },
  reducer: {
    conversation: conversationsReducer
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(),
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;