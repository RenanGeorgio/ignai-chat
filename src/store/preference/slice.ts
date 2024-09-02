import { createSlice } from "@reduxjs/toolkit";
import { preferenceReducer } from "./reducers";
import type { RootState } from "../store";
import { Doc, Preference } from "@types";

const {
  setApiKey,
  setSelectedDocs, 
  setSourceDocs,
  setConversations,
  setPrompt,
  setChunks,
  setTokenLimit,
  setModalStateDeleteConv
} = preferenceReducer;

const initialState: Preference = {
  apiKey: 'xxx',
  prompt: { name: 'default', id: 'default', type: 'public' },
  chunks: '2',
  token_limit: 2000,
  selectedDocs: {
    name: 'default',
    language: 'default',
    location: 'default',
    version: 'default',
    description: 'default',
    fullName: 'default',
    date: 'default',
    docLink: 'default',
    model: 'openai_text-embedding-ada-002',
  } as Doc,
  sourceDocs: null,
  conversations: null,
  modalState: 'INACTIVE',
};

export const prefSlice = createSlice({
  name: 'preference',
  initialState,
  reducers: {
    setApiKey,
    setSelectedDocs,
    setSourceDocs,
    setConversations,
    setPrompt,
    setChunks,
    setTokenLimit,
    setModalStateDeleteConv,
  },
});

export const selectApiKey = (state: RootState) => state.preference.apiKey;
export const selectApiKeyStatus = (state: RootState) => !!state.preference.apiKey;
export const selectSelectedDocsStatus = (state: RootState) => !!state.preference.selectedDocs;
export const selectSourceDocs = (state: RootState) => state.preference.sourceDocs;
export const selectModalStateDeleteConv = (state: RootState) => state.preference.modalState;
export const selectSelectedDocs = (state: RootState) => state.preference.selectedDocs;
export const selectConversations = (state: RootState) => state.preference.conversations;
export const selectConversationId = (state: RootState) => state.conversation.conversationId;
export const selectPrompt = (state: RootState) => state.preference.prompt;
export const selectChunks = (state: RootState) => state.preference.chunks;
export const selectTokenLimit = (state: RootState) => state.preference.token_limit;

const { reducer, actions } = prefSlice;

export { actions as prefSliceActions };
export { reducer as prefSliceReducer };