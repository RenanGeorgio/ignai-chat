import React from "react";
import { Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const FormColaborador: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'white',
        boxShadow: 2,
        borderRadius: '10px',
        padding: 3,
        width: '650px',
        margin: 'auto'
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Adicione colaborador
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(2, 1fr)',
          marginBottom: 3,
        }}
      >
        <TextField 
          label="Nome" 
          placeholder="Nome" 
          fullWidth 
        />
        <TextField 
          label="Telefone" 
          placeholder="(xx) xxxxx-xxxx" 
          fullWidth 
        />
        <TextField 
          label="Número" 
          placeholder="12345" 
          fullWidth 
        />
        <TextField 
          label="Email" 
          placeholder="atendente@unimarka.com.br" 
          fullWidth 
        />
        <TextField 
          label="Plataformas de atendimento" 
          placeholder="WhatsApp, Telegram, Instagram, Telefone, Site" 
          fullWidth 
        />
        <FormControl fullWidth>
          <InputLabel>Categoria</InputLabel>
          <Select defaultValue="">
            <MenuItem value="categoria1">Categoria 1</MenuItem>
            <MenuItem value="categoria2">Categoria 2</MenuItem>
            <MenuItem value="categoria3">Categoria 3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <TextField
        label="Descrição (Opcional)"
        placeholder="Descrição do produto"
        fullWidth
        multiline
        rows={4}
        sx={{ marginTop: 2 }}
      />
    </Box>
  );
}

export default FormColaborador;
