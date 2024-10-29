import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";

import { Edit, Trash } from "../../assets/icons";

interface Colaborador {
  image: string | null;
  name: string;
  email: string;
  phone: string;
}

type StatusType = 'Ativo' | 'Sem atividade';

const statusStyles = {
  ativo: { color: 'green', backgroundColor: '#e9e8e8' },
  sematividade: { color: 'red', backgroundColor: '#e9e8e8' }, 
};

const StatusCell: React.FC<{ status: StatusType }> = ({ status }) => {
  const normalizedStatus = status.toLowerCase().replace(' ', '') as keyof typeof statusStyles;

  return (
    <div
      style={{
        ...statusStyles[normalizedStatus],
        borderRadius: '4px',
        padding: '2px 6px',
        display: 'inline-block',
        textAlign: 'center',
      }}
    >
      {status}
    </div>
  );
};

const ColaboradorCell: React.FC<{ colaborador: Colaborador }> = ({ colaborador }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {colaborador.image ? (
      <img
        src={colaborador.image}
        alt={colaborador.name}
        style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px' }}
      />
    ) : (
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#2e2b2b',
          marginRight: '8px',
        }}
      />
    )}
    <div>
      <div style={{ fontWeight: 'bold' }}>{colaborador.name}</div>
      <div style={{ fontSize: 12, color: 'gray', marginTop: '2px' }}>{colaborador.email}</div>
      <div style={{ fontSize: 12, color: 'gray', marginTop: '2px' }}>{colaborador.phone}</div>
    </div>
  </div>
);

const columns: GridColDef[] = [
  {
    field: 'colaborador',
    headerName: 'Colaboradores',
    width: 300,
    renderCell: (params) => <ColaboradorCell colaborador={params.value} />,
  },
  {
    field: 'numero',
    headerName: 'Número',
    width: 150,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 150,
    renderCell: (params) => <StatusCell status={params.value} />,
  },
  {
    field: 'acao',
    headerName: 'Ação',
    width: 150,
    renderCell: () => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton>
          <Edit />
        </IconButton>
        <IconButton>
          <Trash />
        </IconButton>
      </div>
    ),
  },
];

const rows = [
  {
    id: 1,
    colaborador: {
      image: null,
      name: 'João Silva',
      email: 'joao.silva@example.com',
      phone: '(11) 98765-4321',
    },
    numero: '5649875643',
    status: 'Ativo' as StatusType,
  },
  {
    id: 2,
    colaborador: {
      image: null,
      name: 'Maria Oliveira',
      email: 'maria.oliveira@example.com',
      phone: '(21) 12345-6789',
    },
    numero: '1234567890',
    status: 'Sem atividade' as StatusType,
  },
];

const TableColaborador: React.FC = () => {
  return (
    <div className="business-app-container">
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
          paddingTop: 25,
          paddingBottom: 24,
          margin: 'auto',
          position: 'relative',
          left: 0,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: 1,
          display: 'inline-flex',
        }}
      >
        <div style={{ height: 400, width: '100%', overflowX: 'hidden' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 10]}
          />
        </div>
      </div>
    </div>
  );
}

export default TableColaborador;
