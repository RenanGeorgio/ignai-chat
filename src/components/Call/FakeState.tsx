import React from "react";
import { Call } from "@twilio/voice-sdk";
import { useCall } from "../../contexts/call/hooks";
import { USER_STATE } from "../../types";
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";

interface Props {
  currentState: USER_STATE;
  setConn: (conn: Call | undefined) => void;
  children?: React.ReactNode;
}

export const FakeState: React.FC<Props> = ({ currentState, setConn }: Props) => {
  const { setUserState } = useCall();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    const newState = USER_STATE[event?.target?.value];
    setUserState(newState);

    if (newState === USER_STATE.INCOMING || newState === USER_STATE.ON_CALL) {
      //setConn(true);
    } else {
      setConn(undefined);
    }
  };

  return (
    <Box
      sx={{
        color: "white", 
        marginTop: 4,   
      }}
    >
      <FormControl component="fieldset">
        <FormLabel component="legend" sx={{ color: "white" }}>
          Modo Ligação
        </FormLabel>
        <RadioGroup
          row 
          name="fake-state"
          value={currentState}
          onChange={handleChange}
        >
          {Object.keys(USER_STATE).map((stateKey: string) => (
            <FormControlLabel
              key={stateKey}
              value={stateKey}
              control={<Radio sx={{ color: "white" }} />}
              label={stateKey}
              sx={{
                color: "white", 
                "& .MuiRadio-root": {
                  color: "white", 
                },
              }}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
