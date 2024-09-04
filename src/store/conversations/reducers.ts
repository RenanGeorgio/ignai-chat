import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IConversationsStore } from "@store/interfaces";
import { CurrentConversation, ConversationDTO } from "@store/types";

type State = any

const addConversationReference: CaseReducer<State, PayloadAction<ConversationDTO>> = (state, action) => {
  state.queueConversations.push(action.payload);
}

const setCurrentConversation: CaseReducer<State, PayloadAction<CurrentConversation[]>> = (state, action) => {
  state.queueConversations = action.payload;
}

const raiseError: CaseReducer<State, PayloadAction<{ index: number; message: string }>> = (state, action) => {
  const { index, message } = action.payload;
  state.queueConversations[index].error = message;
}

export const conversationsReducer: IConversationsStore = {
  addConversationReference: addConversationReference,
  setCurrentConversation: setCurrentConversation,
  raiseError: raiseError,
}