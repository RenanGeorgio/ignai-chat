import { createSlice } from "@reduxjs/toolkit";
import { conversationsReducer } from "./reducers";
// import { fetchAnswer } from "@features/conversations";
import type { RootState } from "../store";
import { IConversationsState } from "../interfaces";
// import { USER_STATE } from "@types";


const {
  addConversationReference,
  setCurrentConversation,
  updateConversation,
  raiseError,
} = conversationsReducer;

const initialState: IConversationsState = {
  queueConversations: []
};

export const conversationsSlice = createSlice({
  name: 'conversations',
  initialState,
  reducers: {
    addConversationReference,
    setCurrentConversation,
    updateConversation,
    raiseError,
  },
  extraReducers(builder) {
    builder
      // .addCase(fetchAnswer.pending, (state: IConversationsState) => {
      //   state.userStatus = USER_STATE.READY;
      // })
      // .addCase(fetchAnswer.rejected, (state: IConversationsState, action: any) => {
      //   if (action.meta.aborted) {
      //     state.userStatus = USER_STATE.ON_CALL;
      //     return state;
      //   }
      //   state.userStatus = USER_STATE.ERROR;
      //   state.queueConversations[state.queueConversations.length - 1].error = 'Something went wrong. Please check your internet connection.';
      // });
  },
});

// export const selectQueueConversation = (state: RootState) => state.conversations.queueConversations;

export const selectQueueConversation = (state: RootState) => state.conversation.queueConversations;

const { reducer, actions } = conversationsSlice;

export { actions as conversationsActions };
export { reducer as conversationsReducer };