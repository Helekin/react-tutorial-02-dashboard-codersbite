import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BuildIcon from "@mui/icons-material/Build";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HelpIcon from "@mui/icons-material/Help";
import LogoutIcon from "@mui/icons-material/Logout";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import PaidIcon from "@mui/icons-material/Paid";
import WorkIcon from "@mui/icons-material/Work";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

import logo from "../../assets/logo.png";

import "./sidebar.css";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sb" : ""} id="sidebar">
      <div className="title">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Codersbite</h1>
        </div>
        <div
          className="icon"
          id="sidebarIcon"
          onClick={() => {
            closeSidebar();
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <div className="menu">
        <div className="link active">
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </div>
        <h2>MNG</h2>
        <div className="link">
          <AccountCircleIcon className="icon" />
          <span>Admin Management</span>
        </div>
        <div className="link">
          <ApartmentIcon className="icon" />
          <span>Company Management</span>
        </div>
        <div className="link">
          <BuildIcon className="icon" />
          <span>Employee Management</span>
        </div>
        <div className="link">
          <WarehouseIcon className="icon" />
          <span>Warehouse</span>
        </div>
        <div className="link">
          <HandshakeIcon className="icon" />
          <span>Contracts</span>
        </div>
        <h2>LEAVE</h2>
        <div className="link">
          <HelpIcon className="icon" />
          <span>Request</span>
        </div>
        <div className="link">
          <LogoutIcon className="icon" />
          <span>Leave Policy</span>
        </div>
        <div className="link">
          <CalendarMonthIcon className="icon" />
          <span>Special Days</span>
        </div>
        <div className="link">
          <InsertDriveFileIcon className="icon" />
          <span>Apply for leave</span>
        </div>
        <h2>PAYROLL</h2>
        <div className="link">
          <PaidIcon className="icon" />
          <span>Payroll</span>
        </div>
        <div className="link">
          <WorkIcon className="icon" />
          <span>Paygrade</span>
        </div>
        <div className="logout">
          <PowerSettingsNewIcon className="icon" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
