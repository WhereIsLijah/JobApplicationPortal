import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../Images/favicon.jpg";

function Navbar() {
  return (
      <div className="container">
        <Link to="https://www.geotab.com/">
          <img src={logoImage} alt="logo_image" className="container-logo" />\
        </Link>
        <div className="container-text">GEOTAB</div>
      </div>
  );
}

export default Navbar;
