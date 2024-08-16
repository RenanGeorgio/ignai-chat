import { useContext } from "react";
import { CallContext } from "../CallContext";

const useCall = () => {
  return useContext(CallContext);
}

export default useCall;