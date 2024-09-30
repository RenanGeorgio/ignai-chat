import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

import "../styles/user.css";

const createData = (name: string, status: string, deadline: string) => {
  return { name, status, deadline };
};

const rows = [
  createData("Tarefa 1", "Concluída", "01/09/2024"),
  createData("Tarefa 2", "Pendente", "05/09/2024"),
  createData("Tarefa 3", "Em Progresso", "10/09/2024"),
  createData("Tarefa 4", "Pendente", "12/09/2024"),
];

const User: React.FC = () => {
  return (
    <div className="container">
      <main className="main">
        <section className="section">
          <div className="title">
            <div className="header">
              <a className="headerTitle">Usuário</a>
            </div>
            <div className="infoContainer">
              <div className="infoItem">
                <div className="infoCard">
                  <div className="infoText">Marcio Pereira de Abreu</div>
                </div>
                <div className="infoCard">
                  <div className="infoText">Atendente 10345</div>
                </div>
                <div className="infoCard">
                  <div className="infoText">Ativo</div>
                </div>
                <div className="infoCard">
                  <div className="infoText">
                    e-mail: marcio.pereira@unimarka.com.br
                  </div>
                </div>
              </div>
              <div className="extraInfo">
                <div className="extraInfoCard">
                  <div className="infoLabel">Função</div>
                  <div className="infoDetail">Gerente de Vendas</div>
                </div>
                <div className="extraInfoCard">
                  <div className="infoLabel">Tempo de Atendimento</div>
                  <div className="infoDetail">5 horas</div>
                </div>
                <div className="extraInfoCard">
                  <div className="infoLabel">Local de Trabalho</div>
                  <div className="infoDetail">Unidade Vitória</div>
                </div>
                <div className="extraInfoCard">
                  <div className="infoLabel">Horário de Login</div>
                  <div className="infoDetail">08:30 AM</div>
                </div>
                <div className="additionalInfoCard">
                  <div className="infoLabel">Data de Contratação</div>
                  <div className="infoDetail">01/05/2017</div>
                </div>
                <div className="additionalInfoCard">
                  <div className="infoLabel">Projetos Envolvidos</div>
                  <div className="infoDetail">Projeto A, Projeto B, Projeto C</div>
                </div>
                <div className="additionalInfoCard">
                  <div className="infoLabel">Último Feedback</div>
                  <div className="infoDetail">Excelente desempenho no último trimestre</div>
                </div>
                <div className="additionalInfoCard">
                  <div className="infoLabel">Departamento</div>
                  <div className="infoDetail">Vendas</div>
                </div>
              </div>
              <div className="tableUser">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow sx={{ backgroundColor: '#cfcccc' }}>
                        <TableCell sx={{ fontWeight: 'bold' }}>Tarefa</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Status</TableCell>
                        <TableCell align="right" sx={{ fontWeight: 'bold' }}>Prazo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name}>
                          <TableCell component="th" scope="row">{row.name}</TableCell>
                          <TableCell align="right">
                            <div
                              style={{
                                backgroundColor: row.status === "Concluída" ? "lightgreen" :
                                                row.status === "Pendente" ? "orange" :
                                                row.status === "Em Progresso" ? "lightblue" : "transparent",
                                borderRadius: "10px",
                                padding: "5px 10px",
                                display: "inline-block",
                                fontWeight: "bold"
                              }}
                            >
                              {row.status}
                            </div>
                          </TableCell>
                          <TableCell align="right">{row.deadline}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="footer">IGNAI, marca registrada</div>
    </div>
  );
}

export default User;
