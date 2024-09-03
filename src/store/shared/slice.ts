import { createSlice } from "@reduxjs/toolkit";
import { fetchSharedAnswer } from "@features/sharedConversation";
import { sharedConversationReducer } from "./reducers";
import type { RootState } from "../store";
import { SharedConversationsType } from "@types";

const {
  setStatus,
  setIdentifier,
  setFetchedData,
  setClientApiKey,
  addQuery,
  updateStreamingQuery,
  updateQuery,
  raiseError,
  saveToLocalStorage
} = sharedConversationReducer;

const initialState: SharedConversationsType = {
  queries: [],
  identifier: '',
  status: 'idle',
};

export const sharedConversationSlice = createSlice({
  name: 'sharedConversation',
  initialState,
  reducers: {
    setStatus,
    setIdentifier,
    setFetchedData,
    setClientApiKey,
    addQuery,
    updateStreamingQuery,
    updateQuery,
    raiseError,
    saveToLocalStorage,
  },
  extraReducers(builder: any) {
    builder
      .addCase(fetchSharedAnswer.pending, (state: SharedConversationsType) => {
        state.status = 'loading';
      })
      .addCase(fetchSharedAnswer.rejected, (state: SharedConversationsType, action: any) => {
        if (action.meta.aborted) {
          state.status = 'idle';
          return state;
        }

        state.status = 'failed';
        state.queries[state.queries.length - 1].content.error = 'Something went wrong. Please check your internet connection.';
      });
  },
});

export const selectStatus = (state: RootState) => state.conversation.status;
export const selectClientAPIKey = (state: RootState) => state.sharedConversation.apiKey;
export const selectQueries = (state: RootState) => state.sharedConversation.queries;
export const selectTitle = (state: RootState) => state.sharedConversation.title;
export const selectDate = (state: RootState) => state.sharedConversation.date;

const { reducer, actions } = sharedConversationSlice;

export { actions as sharedConversationActions };
export { reducer as sharedConversationReducer };