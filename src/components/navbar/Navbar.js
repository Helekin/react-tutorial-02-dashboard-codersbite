import React from "react";

import "./navbar.css";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import avatar from "../../assets/avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-icon" onClick={() => openSidebar()}>
        <MenuIcon />
      </div>
      <div className="left">
        <div className="link">Suscribers</div>
        <div className="link">Video Management</div>
        <div className="link active">Admin</div>
      </div>
      <div className="right">
        <div className="icon-wrapper">
          <SearchIcon className="icon" />
        </div>
        <div className="icon-wrapper">
          <img width={30} src={avatar} alt="avatar"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
