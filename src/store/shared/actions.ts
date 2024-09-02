import { sharedConversationActions } from "./slice";

export const {
  setStatus,
  setIdentifier,
  setFetchedData,
  setClientApiKey,
  updateQuery,
  updateStreamingQuery,
  addQuery,
  saveToLocalStorage,
} = sharedConversationActions;