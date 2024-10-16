import React from "react";
import { Call } from "@twilio/voice-sdk";
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { USER_STATE } from "../../types";

import "./CurrentState.module.css";

interface Props {
  currentState: USER_STATE;
  setConn?: (conn: Call | undefined) => void;
  children?: React.ReactNode;
}

const stateColor = {
  [USER_STATE.CONNECTING]: "#B7AC44",
  [USER_STATE.READY]: "#DAD870",
  [USER_STATE.INCOMING]: "#DAD870",
  [USER_STATE.ON_CALL]: "#FF5C4D",
  [USER_STATE.OFFLINE]: "#FFB52E",
  [USER_STATE.ERROR]: "#FFB52E",
};

export const CurrentState: React.FC<Props> = ({ currentState, children }: Props) => {
  return (
    <Box
      sx={{
        color: "white",
        marginTop: 2,
        marginLeft: "auto",    
        marginRight: "auto",
        width: "90%",          
        padding: "5px",      
        borderRadius: "8px"   
      }}
    >
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend" sx={{ color: stateColor[currentState], fontSize: "20px" }}>
          Status de Atendimento
        </FormLabel>
        <RadioGroup
          row
          name="state"
          value={currentState}
        >
          <FormControlLabel
            key={currentState}
            value={currentState}
            control={<Radio sx={{ color: stateColor[currentState] }} />}
            label={currentState}
            sx={{
              color: stateColor[currentState],
              "& .MuiRadio-root": {
                color: "white",
              },
            }}
          />
        </RadioGroup>
      </FormControl>
      {children}
    </Box>
  );
}