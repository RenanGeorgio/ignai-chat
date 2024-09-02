import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { FileTextIcon, MessageCircleIcon, SettingIcon,  IgnaiIcon } from "../assets/icons";

import "../styles/sidebar.css";

const SideBar: FunctionComponent = () => {
  return (
    <div className="container">
      <div className="section1">
        <div className="sectionContainer">
          <div className="menu-item">
            <IgnaiIcon />
          </div>
          <Link className="link" to="/">
            <div className="menu-item"> 
              <MessageCircleIcon />
            </div>
          </Link>
          <Link className="link" to="/user">
            <div className="menu-item">
              <SettingIcon />
            </div>
          </Link>
          <Link className="link" to="/faq">
            <div className="menu-item">
              <FileTextIcon />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;