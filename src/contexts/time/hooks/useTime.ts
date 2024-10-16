import { useContext } from "react";
import { TimeContext } from "../TimeContext";

const useTime = () => {
    return useContext(TimeContext);
}

export default useTime;