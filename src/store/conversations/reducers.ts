import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IConversationsStore } from "@store/interfaces";
import { CurrentConversation, ConversationDTO } from "@store/types";

type State = any

const addConversationReference: CaseReducer<State, PayloadAction<ConversationDTO>> = (state: any, action: any) => {
  state.queueConversations.push(action.payload);
}

const setCurrentConversation: CaseReducer<State, PayloadAction<CurrentConversation[]>> = (state: any, action: any) => {
  state.queueConversations = action.payload;
}

const updateConversation: CaseReducer<State, PayloadAction<Partial<ConversationDTO>>> = (state: any, action: any) => {
  const updated = state.queueConversations.filter((item: ConversationDTO) => item.id !== action.payload);
  state.queueConversations = updated;
}

const raiseError: CaseReducer<State, PayloadAction<{ index: number; message: string }>> = (state: any, action: any) => {
  const { index, message } = action.payload;
  state.queueConversations[index].error = message;
}

export const conversationsReducer: IConversationsStore = {
  addConversationReference: addConversationReference,
  setCurrentConversation: setCurrentConversation,
  updateConversation: updateConversation,
  raiseError: raiseError,
}