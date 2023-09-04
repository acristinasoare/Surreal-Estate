import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="Sidebar-container">
      <div className="Sidebar-link">
        <Link to={`/?query={"city":"Edinburgh"}`}>Edinburgh</Link>
      </div>
      <div className="Sidebar-link">
        <Link to={`/?query={"city":"Leeds"}`}>Leeds</Link>
      </div>
      <div>
        <Link to={`/?query={"city":"Sheffield"}`}>Sheffield</Link>
      </div>
      <div>
        <Link to={`/?query={"city":"Manchester"}`}>Manchester</Link>
      </div>
    </div>
  );
};

export default SideBar;
