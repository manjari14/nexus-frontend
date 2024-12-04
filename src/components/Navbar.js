import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/Glogo.png";
import partnerImg from "../assets/NexusLogo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={partnerImg} alt="Partner Logo" className="partner-logo" />
      </div>
      <div className="navbar-center">
        <img src={logoImg} alt="Event Logo" className="event-logo" />
      </div>
      <ul className="navbar-tabs">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
