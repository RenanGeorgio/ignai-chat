import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircleIcon, SettingIcon, IgnaiIcon, DashboardIcon, HistoryIcon } from "../assets/icons";
import "../styles/sidebar.css";

const SideBar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidebar ${expanded ? "expanded" : ""}`}>
      <div className="section1">
        <div className="sectionContainer">
          <div onClick={toggleSidebar} className="menu-item-logo">
            <IgnaiIcon />
          </div>
          <Link className="link" to="/dashboard">
            <div className={`menu-item ${currentPath === "/dashboard" ? "menu-item-active" : ""}`}>
              <DashboardIcon />
              {expanded && <span className="item-text">Dashboard</span>}
            </div>
          </Link>
          <Link className="link" to="/configuration">
            <div className={`menu-item ${currentPath === "/configuration" ? "menu-item-active" : ""}`}>
              <SettingIcon />
              {expanded && <span className="item-text">Configurações</span>}
            </div>
          </Link>
          <Link className="link" to="/">
            <div className={`menu-item ${currentPath === "/" ? "menu-item-active" : ""}`}>
              <MessageCircleIcon />
              {expanded && <span className="item-text">Mensagens</span>}
            </div>
          </Link>
          <Link className="link" to="/historico">
            <div className={`menu-item ${currentPath === "/historico" ? "menu-item-active" : ""}`}>
              <HistoryIcon />
              {expanded && <span className="item-text">Histórico</span>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
