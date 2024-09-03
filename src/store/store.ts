import { configureStore } from "@reduxjs/toolkit";
import { sharedConversationReducer } from "./shared/slice";
import { prefSliceReducer } from "./preference/slice";
import { conversationReducer } from "./conversation/slice";
import { prefListenerMiddleware } from "./preference/middleware";
import { Preference } from "@types";

const key = localStorage.getItem('DocsGPTApiKey');
const prompt = localStorage.getItem('DocsGPTPrompt');
const chunks = localStorage.getItem('DocsGPTChunks');
const token_limit = localStorage.getItem('DocsGPTTokenLimit');
const doc = localStorage.getItem('DocsGPTRecentDocs');

const isDev = true //process.env.NODE_END == 'development';

export const store = configureStore({
  preloadedState: {
    preference: {
      apiKey: key ?? '',
      prompt:
        prompt !== null
          ? JSON.parse(prompt)
          : { name: 'default', id: 'default', type: 'private' },
      chunks: JSON.parse(chunks ?? '2').toString(),
      token_limit: token_limit ? parseInt(token_limit) : 2000,
      selectedDocs: doc !== null ? JSON.parse(doc) : null,
      conversations: null,
      sourceDocs: [
        {
          location: '',
          language: '',
          name: 'default',
          version: '',
          date: '',
          description: '',
          docLink: '',
          fullName: '',
          model: '1.0',
        },
      ],
      modalState: 'INACTIVE',
    } satisfies Preference as Preference,
  },
  reducer: {
    preference: prefSliceReducer,
    conversation: conversationReducer,
    sharedConversation: sharedConversationReducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware().concat(prefListenerMiddleware.middleware),
  devTools: isDev,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// TODO : streamline async state management