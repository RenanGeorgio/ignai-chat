import React from "react";
import SideBar from "../components/side-bar";

import "../styles/user.css";

const User: React.FC = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <SideBar />
      </div>
      <main className="main">
        <section className="section">
          <div className="title">
            <div className="header">
              <a className="headerTitle">
                Usuário
              </a>
            </div>
            <div className="infoContainer">
              <div className="infoItem">
                <div className="infoCard">
                  <div className="infoText">
                    Marcio Pereira de Abreu
                  </div>
                </div>
                <div className="infoCard">
                  <div className="infoText">
                    Atendente 10345
                  </div>
                </div>
                <div className="infoCard">
                  <div className="infoText">
                    Ativo
                  </div>
                </div>
                <div className="infoCard">
                  <div className="infoText">
                    e-mail: marcio.pereira@unimarka.com.br
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="footer">
        IGNAI, marca registrada
      </div>
    </div>
  );
}

export default User;