import React from "react";
import { Link } from "react-router-dom";
import "../styles/side-bar.css";

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Filter by city</div>
      <div className="sidebar-div">
        <Link className="sidebar-link" to={`/?query={"city":"Edinburgh"}`}>
          Edinburgh
        </Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link" to={`/?query={"city":"Leeds"}`}>
          Leeds
        </Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link" to={`/?query={"city":"Sheffield"}`}>
          Sheffield
        </Link>
      </div>
      <div className="sidebar-div">
        <Link className="sidebar-link" to={`/?query={"city":"Manchester"}`}>
          Manchester
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
