import React from "react";
import { Box, Button, Checkbox, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Paper, Avatar } from "@mui/material";
import { Edit } from "../../assets/icons";

const ticketData = [
  {
    id: 1,
    atendente: { nome: 'João Silva', email: 'joao.silva@email.com', avatar: '/path-to-image.jpg' },
    resumo: 'Pedido errado, Comprei 50kg de fertilizantes mas chegou 45kg',
    data: 'Mar, 17, 2023',
    status: { label: 'Resolvido', cor: 'green' }
  },
  {
    id: 2,
    atendente: { nome: 'Maria Souza', email: 'maria.souza@email.com', avatar: '/path-to-image-2.jpg' },
    resumo: 'Produto danificado, a embalagem estava aberta ao chegar.',
    data: 'Mar, 18, 2023',
    status: { label: 'Pendente', cor: 'orange' }
  },
  {
    id: 3,
    atendente: { nome: 'Carlos Mendes', email: 'carlos.mendes@email.com', avatar: '/path-to-image-3.jpg' },
    resumo: 'Pedido incompleto, faltou um item da lista.',
    data: 'Mar, 19, 2023',
    status: { label: 'Resolvido', cor: 'green' }
  },
  {
    id: 4,
    atendente: { nome: 'Ana Lima', email: 'ana.lima@email.com', avatar: '/path-to-image-4.jpg' },
    resumo: 'Atraso na entrega, deveria ter chegado ontem.',
    data: 'Mar, 20, 2023',
    status: { label: 'Pendente', cor: 'orange' }
  },
  {
    id: 5,
    atendente: { nome: 'Pedro Costa', email: 'pedro.costa@email.com', avatar: '/path-to-image-5.jpg' },
    resumo: 'Problema na cobrança, valor diferente do combinado.',
    data: 'Mar, 21, 2023',
    status: { label: 'Resolvido', cor: 'green' }
  }
];

const TicketTable: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ color: 'black', marginBottom: 2, fontWeight: 'bold' }}>
        Histórico
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, marginBottom: 3 }}>
        <TextField
          placeholder="Buscar ticket"
          variant="outlined"
          size="small"
          sx={{ width: "50%", marginRight: "35px" }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: 'grey.300', color: 'grey.800', width: '200px' }}
        >
          Filtro de Busca
        </Button>
        <Select
          defaultValue="10"
          variant="outlined"
          size="small"
          sx={{ width: 100 }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
        <Select
          defaultValue="All"
          variant="outlined"
          size="small"
          sx={{ width: 120 }}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Inclusive">Inclusive</MenuItem>
        </Select>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Atendente</TableCell>
              <TableCell>Resumo</TableCell>
              <TableCell>Data</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ação</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ticketData.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar alt={ticket.atendente.nome} src={ticket.atendente.avatar} />
                    <Box>
                      <Typography sx={{ color: 'blue' }}>{ticket.atendente.nome}</Typography>
                      <Typography sx={{ color: 'grey.600', fontSize: 12 }}>{ticket.atendente.email}</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{ticket.resumo}</TableCell>
                <TableCell>{ticket.data}</TableCell>
                <TableCell>
                  <Box
                    sx={{
                      backgroundColor: `${ticket.status.cor}.100`,
                      color: `${ticket.status.cor}.800`,
                      borderRadius: 1,
                      padding: '2px 8px',
                      display: 'inline-block'
                    }}
                  >
                    {ticket.status.label}
                  </Box>
                </TableCell>
                <TableCell>
                  <Edit />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TicketTable;
