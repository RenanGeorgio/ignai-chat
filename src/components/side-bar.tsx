import React from "react";
import '../style/sidebar.css';

export type SideBarType = {
  className?: string;
  white?: string;
  groupIcon?: string;
  f?: string;
  m?: string;
};

const SideBar: React.FC<SideBarType> = ({
  className = "",
  white,
  groupIcon,
  f,
  m,
}) => {
  return (
    <div className={`container ${className}`}>
      <div className="placeholder" />
      <div className="itemsContainer">
        <div className="item">
          <img className="image" alt="" src={white} />
          <div className="text">Inbox</div>
          <div className="iconContainer">
            <img className="icon" alt="" src={groupIcon} />
            <b className="iconText">F</b>
          </div>
        </div>
      </div>
      <img className="logout" alt="" src={m} />
      <img className="logo" alt="" src={f} />
    </div>
  );
};

export default SideBar;
