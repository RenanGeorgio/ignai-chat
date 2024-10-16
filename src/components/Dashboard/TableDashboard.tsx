import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const TableDashboard: React.FC = () => {
  const rows = [
    { id: 1, name: "Marcos Souza", number: 23421, tickets: "100,000", resolved: 99, note: 10 },
    { id: 2, name: "Ana Pereira", number: 12345, tickets: "85,000", resolved: 95, note: 9 },
    { id: 3, name: "Carlos Lima", number: 67890, tickets: "50,000", resolved: 45, note: 8 },
    { id: 4, name: "Beatriz Santos", number: 54321, tickets: "60,000", resolved: 70, note: 7 },
    { id: 5, name: "João Oliveira", number: 98765, tickets: "40,000", resolved: 30, note: 6 },
  ];

  return (
    <Box
      m={3}
      sx={{
        width: 750,
        height: 380,
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#fff',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        cursor: 'pointer'
      }}
    >
      <Typography variant="h6" gutterBottom>
        Fonte de abertura de tickets
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Número</TableCell>
              <TableCell>Tickets</TableCell>
              <TableCell>Resolvidos</TableCell>
              <TableCell>Nota</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.tickets}</TableCell>
                <TableCell 
                  style={{ color: row.resolved >= 50 ? 'green' : 'red' }}
                >
                  {row.resolved}%
                </TableCell>
                <TableCell>{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default TableDashboard;
