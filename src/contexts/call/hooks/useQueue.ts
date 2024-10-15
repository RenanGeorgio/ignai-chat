import { useContext } from "react";
import { QueueContext } from "../CallContext";

const useQueue = () => {
  return useContext(QueueContext);
}

export default useQueue;