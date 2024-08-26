import React from "react";
import SideBar from "@components/side-bar";

import "./user.module.css";

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
              </div>
            </div>
          </div>
          <div className="footer">
            IGNAI, marca registrada
          </div>
        </section>
      </main>
    </div>
  );
}

export default User;