import { useContext } from "react";
import { CommunicationContext } from "../CommunicationContext";

const useCommunication = () => {
    return useContext(CommunicationContext);
}

export default useCommunication;