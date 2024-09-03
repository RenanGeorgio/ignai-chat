import { createSlice } from "@reduxjs/toolkit";
import { conversationsReducer } from "./reducers";
import { fetchAnswer } from "@features/conversations";
import type { RootState } from "../store";
import { IConversationsState } from "@store/interfaces";
import { USER_STATE } from "@types";


const {
  addConversation,
  setCurrentConversation,
  setStatus,
  raiseError,
} = conversationsReducer;

const initialState: IConversationsState = {
  queueConversations: [],
  userStatus: USER_STATE.OFFLINE
};

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    addConversation,
    setCurrentConversation,
    setStatus,
    raiseError,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnswer.pending, (state: ConversationState) => {
        state.status = 'loading';
      })
      .addCase(fetchAnswer.rejected, (state: ConversationState, action: any) => {
        if (action.meta.aborted) {
          state.status = 'idle';
          return state;
        }
        state.status = 'failed';
        state.queries[state.queries.length - 1].content.error = 'Something went wrong. Please check your internet connection.';
      });
  },
});

export const selectQueueConversation = (state: RootState) => state.conversations.queueConversations;

export const selectStatus = (state: RootState) => state.conversations.userStatus;

const { reducer, actions } = conversationsSlice;

export { actions as conversationsActions };
export { reducer as conversationsReducer };