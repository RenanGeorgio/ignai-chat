import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { FileTextIcon, MessageCircleIcon, SettingIcon, IgnaiIcon, DashboardIcon } from "../assets/icons";

import "../styles/sidebar.css";

const SideBar: FunctionComponent = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="container">
      <div className="section1">
        <div className="sectionContainer">
          <div className={`menu-item-logo`}>
            <IgnaiIcon />
          </div>
          <Link className="link" to="/dashboard">
            <div className={`menu-item ${currentPath === "/dashboard" ? "menu-item-active" : ""}`}>
              <DashboardIcon />
            </div>
          </Link>
          <Link className="link" to="/">
            <div className={`menu-item ${currentPath === "/" ? "menu-item-active" : ""}`}>
              <MessageCircleIcon />
            </div>
          </Link>
          <Link className="link" to="/user">
            <div className={`menu-item ${currentPath === "/user" ? "menu-item-active" : ""}`}>
              <SettingIcon />
            </div>
          </Link>
          <Link className="link" to="/faq">
            <div className={`menu-item ${currentPath === "/faq" ? "menu-item-active" : ""}`}>
              <FileTextIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
