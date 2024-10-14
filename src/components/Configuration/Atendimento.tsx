import React from "react";
import { Box, Typography, Icon } from "@mui/material";

const AtendimentoComponent: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      padding={2}
      sx={{ maxWidth: '400px', margin: '0 auto' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        sx={{
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" color="#4B465C">Horário de atendimento</Typography>
          <Icon fontSize="small">access_time</Icon> 
        </Box>
        <Typography fontSize="22px" color="#4B465C" mt={1}>
          De 08:00 até 18:00
        </Typography>
        <Box display="flex" justifyContent="flex-start" mt={1}>
          <Icon fontSize="small">event</Icon> 
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={2}
        sx={{
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" color="#4B465C">Distribuição de fila de atendimento</Typography>
          <Icon fontSize="small">queue</Icon> 
        </Box>
        <Typography fontSize="22px" color="#4B465C" mt={1}>
          Fila Dinâmica
        </Typography>
        <Box display="flex" justifyContent="flex-start" mt={1}>
          <Icon fontSize="small">list_alt</Icon> 
        </Box>
      </Box>
    </Box>
  );
}

export default AtendimentoComponent;
