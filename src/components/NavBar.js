import React from "react";
import "../styles/navbar.css";

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
          <a href="/view-properties">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="/add-a-property">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
