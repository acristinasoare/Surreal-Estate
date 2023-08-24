import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="Surreal Estate Logo"
        className="logo"
      />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <Link className="link-text" to="/">
            View Properties
          </Link>
        </li>
        <li className="navbar-links-item">
          <Link className="link-text" to="/add-property">
            Add a Property
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
