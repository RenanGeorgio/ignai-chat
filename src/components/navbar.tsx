import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FileTextIcon, UserIcon, MessageCircleIcon } from "../assets/icons";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link className="link" to="/user">
          <div className={`menu-item ${currentPath === '/user' ? 'menu-item-active' : ''}`}>
            <MessageCircleIcon />
          </div>
        </Link>
        <Link className="link" to="/faq">
          <div className={`menu-item ${currentPath === '/faq' ? 'menu-item-active' : ''}`}>
            <FileTextIcon />
          </div>
        </Link>
        <div className={`menu-item user-menu ${currentPath === '/profile' ? 'menu-item-active' : ''}`} onClick={toggleMenu}>
          <UserIcon />
          {showMenu && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">Perfil do Usuário</Link>
              <Link to="/help" className="dropdown-item">Help</Link>
              <Link to="/logout" className="dropdown-item">Deslogar</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
