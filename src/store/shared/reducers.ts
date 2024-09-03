import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { ISharedConversationStore } from "@store/interfaces";
import { RaiseErrorType, SharedData, SharedQuery } from "@store/types";
import { ChatGPTMessage, Status } from "@types";

type State = any

const setStatus: CaseReducer<State, PayloadAction<Status>> = (state, action) => {
  state.status = action.payload;
}

const setIdentifier: CaseReducer<State, PayloadAction<string>> = (state, action) => {
  state.identifier = action.payload;
}

const setFetchedData: CaseReducer<State, PayloadAction<SharedData>> = (state, action) => {
  const { queries, title, identifier, date } = action.payload;

  const previousQueriesStr = localStorage.getItem(identifier);
  const localySavedQueries: ChatGPTMessage[] = previousQueriesStr ? JSON.parse(previousQueriesStr) : [];

  state.queries = [...queries, ...localySavedQueries];
  state.title = title;
  state.date = date;
  state.identifier = identifier;
}

const setClientApiKey: CaseReducer<State, PayloadAction<string>> = (state, action) => {
  state.apiKey = action.payload;
}

const addQuery: CaseReducer<State, PayloadAction<ChatGPTMessage>> = (state, action) => {
  state.queries.push(action.payload);
}

const updateStreamingQuery: CaseReducer<State, PayloadAction<SharedQuery>> = (state, action) => {
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

const updateQuery: CaseReducer<State, PayloadAction<SharedQuery>> = (state, action) => {
  const { index, query } = action.payload;

  state.queries[index].content = {
    ...state.queries[index].content,
    ...query,
  };
}

const raiseError: CaseReducer<State, PayloadAction<RaiseErrorType>> = (state, action) => {
  const { index, message } = action.payload;
  state.queries[index].content.error = message;
}

const saveToLocalStorage: CaseReducer<State, PayloadAction<any>> = (state, action) => {
  const previousQueriesStr = localStorage.getItem(state.identifier);
  previousQueriesStr
    ? localStorage.setItem(
        state.identifier,
        JSON.stringify([
          ...JSON.parse(previousQueriesStr),
          state.queries[state.queries.length - 1],
        ]),
      )
    : localStorage.setItem(
        state.identifier,
        JSON.stringify([state.queries[state.queries.length - 1]]),
      );
}

export const sharedConversationReducer: ISharedConversationStore = {
  setStatus: setStatus,
  setIdentifier: setIdentifier,
  setFetchedData: setFetchedData,
  setClientApiKey: setClientApiKey,
  addQuery: addQuery,
  updateStreamingQuery: updateStreamingQuery,
  updateQuery: updateQuery,
  raiseError: raiseError,
  saveToLocalStorage: saveToLocalStorage,
}