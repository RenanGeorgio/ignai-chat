import { configureStore } from "@reduxjs/toolkit";
import { conversationReducer } from "./conversation/slice";

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
    conversation: conversationReducer
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(),
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;