import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IPreferencesStore } from "@store/interfaces";
import { ActiveState } from "@types";

type State = any

const setApiKey: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.apiKey = action.payload;
}

const setSelectedDocs: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.selectedDocs = action.payload;
}

const setSourceDocs: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.sourceDocs = action.payload;
}

const setConversations: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.conversations = action.payload;
}

const setPrompt: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.prompt = action.payload;
}

const setChunks: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.chunks = action.payload;
}

const setTokenLimit: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  state.token_limit = action.payload;
}

const setModalStateDeleteConv: CaseReducer<State, PayloadAction<ActiveState>> = (state, action) => {
  state.modalState = action.payload;
}

export const preferenceReducer: IPreferencesStore = {
  setApiKey: setApiKey,
  setSelectedDocs: setSelectedDocs, 
  setSourceDocs: setSourceDocs,
  setConversations: setConversations,
  setPrompt: setPrompt,
  setChunks: setChunks,
  setTokenLimit: setTokenLimit,
  setModalStateDeleteConv: setModalStateDeleteConv,
}