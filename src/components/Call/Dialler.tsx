import React from "react";
import { Grid, Button, Box, TextField } from "@mui/material";

import { KeypadButton } from "./KeypadButton";

interface Props {
  number: string;
  setNumber: (number: string) => void;
}

export const Dialler: React.FC<Props> = ({ number, setNumber }: Props) => {
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target?.value);
  };

  const handleBackSpace = () => {
    setNumber(number.substring(0, number.length - 1));
  };

  const handleNumberPressed = (newNumber: string) => {
    return () => {
      setNumber(`${number}${newNumber}`);
    };
  };

  return (
    <Box mt={4}>
      <TextField
        type="tel"
        value={number}
        onChange={handleNumberChange}
        variant="outlined"
        margin="none"
        sx={{
          backgroundColor: "#fff", 
          width: "30%",           
          borderRadius: "20px", 
          marginBottom: "8px",     
          input: {
            textAlign: "center",    
            padding: "10px"         
          }
        }}
      />
      <Box textAlign="center" mt={0} ml={10} mr={10}>
        <Grid 
          container 
          spacing={1} 
          justifyContent="center"
          sx={{
            maxWidth: "500px", 
            margin: "0 auto",  
            padding: "10px",
            borderRadius: "8px" 
          }}
        >
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((num) => (
            <Grid item xs={4} key={num}>
              <Button
                variant="contained"
                fullWidth
                onClick={handleNumberPressed(num)}
                sx={{
                  backgroundColor: "#F28B82", 
                  color: "white", 
                  margin: "4px", 
                  padding: "12px",
                  fontSize: "18px",
                  "&:hover": {
                    backgroundColor: "#ee6161", 
                  },
                }}
              >
                {num}
              </Button>
            </Grid>
          ))}
        </Grid>
        {number.length > 0 && (
          <Box mt={2}>
            <KeypadButton handleClick={handleBackSpace}>
              <span style={{ fontSize: "24px" }}>⌫</span>
            </KeypadButton>
          </Box>
        )}
      </Box>
    </Box>
  );
}
