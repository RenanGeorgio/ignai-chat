import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IConversationsStore } from "@store/interfaces";
import { CurrentConversation, ConversationDTO } from "@store/types";
import { QueueItemLabel } from "@types";

type State = any

const addConversation: CaseReducer<State, PayloadAction<CurrentConversation>> = (state, action) => {
  state.queueConversations.push(action.payload);
}

const addConversationReference: CaseReducer<State, PayloadAction<ConversationDTO>> = (state, action) => {
  state.queueConversations.push(action.payload);
}

const addLabelConversation: CaseReducer<State, PayloadAction<QueueItemLabel>> = (state, action) => {
  state.queueItemLabel.push(action.payload);
}

const setCurrentConversation: CaseReducer<State, PayloadAction<CurrentConversation[]>> = (state, action) => {
  state.queueConversations = action.payload;
}

const raiseError: CaseReducer<State, PayloadAction<{ index: number; message: string }>> = (state, action) => {
  const { index, message } = action.payload;
  state.queueConversations[index].error = message;
}

export const conversationsReducer: IConversationsStore = {
  addConversation: addConversation,
  addConversationReference: addConversationReference,
  addLabelConversation: addLabelConversation,
  setCurrentConversation: setCurrentConversation,
  raiseError: raiseError,
}