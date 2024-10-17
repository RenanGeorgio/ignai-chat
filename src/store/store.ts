import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { conversationsReducer } from "./conversations/slice";

const key = localStorage.getItem('DocsGPTApiKey');
const prompt = localStorage.getItem('DocsGPTPrompt');
const chunks = localStorage.getItem('DocsGPTChunks');
const token_limit = localStorage.getItem('DocsGPTTokenLimit');
const doc = localStorage.getItem('DocsGPTRecentDocs');

const isDev = true //process.env.NODE_END == 'development';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, conversationsReducer);

export const store = configureStore({
  preloadedState: {},
  reducer: {
    conversations: persistedReducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(),
  devTools: isDev,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
