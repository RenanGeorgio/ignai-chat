import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IConversationsStore } from "@store/interfaces";
import { CurrentConversation } from "@store/types";
import { USER_STATE, QueueItemLabel } from "@types";

type State = any

const addConversation: CaseReducer<State, PayloadAction<CurrentConversation>> = (state, action) => {
  state.queueConversations.push(action.payload);
}

const addLabelConversation: CaseReducer<State, PayloadAction<QueueItemLabel>> = (state, action) => {
  state.queueItemLabel.push(action.payload);
}

const setCurrentConversation: CaseReducer<State, PayloadAction<CurrentConversation[]>> = (state, action) => {
  state.queueConversations = action.payload;
}

const setStatus: CaseReducer<State, PayloadAction<USER_STATE>> = (state, action) => {
  state.userStatus = action.payload;
}

const raiseError: CaseReducer<State, PayloadAction<{ index: number; message: string }>> = (state, action) => {
  const { index, message } = action.payload;
  state.queueConversations[index].error = message;
}

export const conversationsReducer: IConversationsStore = {
  addConversation: addConversation,
  addLabelConversation: addLabelConversation,
  setCurrentConversation: setCurrentConversation,
  setStatus: setStatus,
  raiseError: raiseError,
}