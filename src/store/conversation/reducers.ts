import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { IConversationStore } from "@store/interfaces";
import { ChatGPTMessage, Query, Status } from "@types";

type State = any

const addQuery: CaseReducer<State, PayloadAction<ChatGPTMessage>> = (state, action) => {
  state.queries.push(action.payload);
}

const setConversation: CaseReducer<State, PayloadAction<ChatGPTMessage[]>> = (state, action) => {
  state.queries = action.payload;
}

const updateStreamingQuery:CaseReducer<State, PayloadAction<{ index: number; query: Partial<Query> }>> = (state, action) => {
  const { index, query } = action.payload;
  
  if (query.response != undefined) {
    state.queries[index].content.response = (state.queries[index].content.response || '') + query.response;
  } else {
    state.queries[index].content = {
      ...state.queries[index].content,
      ...query,
    };
  }
}

const updateConversationId: CaseReducer<State, PayloadAction<{ query: Partial<Query> }>> = (state, action) => {
  state.conversationId = action.payload.query.conversationId ?? null;
}

const updateStreamingSource: CaseReducer<State, PayloadAction<{ index: number; query: Partial<Query> }>> = (state, action) => {
  const { index, query } = action.payload;

  if (!state.queries[index].content.sources) {
    state.queries[index].content.sources = query?.sources;
  } else {
    state.queries[index].content.sources!.push(query.sources![0]);
  }
}

const updateQuery: CaseReducer<State, PayloadAction<{ index: number; query: Partial<Query> }>> = (state, action) => {
  const { index, query } = action.payload;

  state.queries[index].content = {
    ...state.queries[index].content,
    ...query,
  };
}

const setStatus: CaseReducer<State, PayloadAction<Status>> = (state, action) => {
  state.status = action.payload;
}

const raiseError: CaseReducer<State, PayloadAction<{ index: number; message: string }>> = (state, action) => {
  const { index, message } = action.payload;
  state.queries[index].content.error = message;
}

export const conversationReducer: IConversationStore = {
  addQuery: addQuery,
  setConversation: setConversation,
  updateStreamingQuery: updateStreamingQuery,
  updateConversationId: updateConversationId,
  updateStreamingSource: updateStreamingSource,
  updateQuery: updateQuery,
  setStatus: setStatus,
  raiseError: raiseError,
}