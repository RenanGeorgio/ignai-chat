import { createSlice } from "@reduxjs/toolkit";
import { conversationsReducer } from "./reducers";
import { fetchAnswer } from "@features/conversations";
import type { RootState } from "../store";
import { IConversationsState } from "@store/interfaces";
import { USER_STATE } from "@types";


const {
  addConversation,
  addLabelConversation,
  setCurrentConversation,
  setStatus,
  raiseError,
} = conversationsReducer;

const initialState: IConversationsState = {
  queueConversations: [],
  queueItemLabel: [],
  userStatus: USER_STATE.OFFLINE
};

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    addConversation,
    addLabelConversation,
    setCurrentConversation,
    setStatus,
    raiseError,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchAnswer.pending, (state: IConversationsState) => {
        state.userStatus = USER_STATE.READY;
      })
      .addCase(fetchAnswer.rejected, (state: IConversationsState, action: any) => {
        if (action.meta.aborted) {
          state.userStatus = USER_STATE.ON_CALL;
          return state;
        }
        state.userStatus = USER_STATE.ERROR;
        state.queueConversations[state.queueConversations.length - 1].error = 'Something went wrong. Please check your internet connection.';
      });
  },
});

export const selectQueueConversation = (state: RootState) => state.conversations.queueConversations;

export const selectStatus = (state: RootState) => state.conversations.userStatus;

const { reducer, actions } = conversationsSlice;

export { actions as conversationsActions };
export { reducer as conversationsReducer };