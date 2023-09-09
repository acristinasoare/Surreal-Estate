import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
import "../styles/side-bar.css";

const SideBar = () => {
  const buildQueryString = (operation, valueObj) => {
    const { search } = useLocation();
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify(valueObj),
    };
    return qs.stringify(newQueryParams, {
      addQueryPrefix: true,
      encode: false,
    });
  };
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">Filter by city</div>
      <div className="sidebar-div">
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Edinburgh" })}
        >
          Edinburgh
        </Link>
      </div>
      <div className="sidebar-div">
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Leeds" })}
        >
          Leeds
        </Link>
      </div>
      <div className="sidebar-div">
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Sheffield" })}
        >
          Sheffield
        </Link>
      </div>
      <div className="sidebar-div">
        <Link
          className="sidebar-link"
          to={buildQueryString("query", { city: "Manchester" })}
        >
          Manchester
        </Link>
      </div>
      <div className="sidebar-div">
        <Link
          className="sidebar-link"
          to={buildQueryString("sort", { price: 1 })}
        >
          Price low to high
        </Link>
      </div>
      <div className="sidebar-div">
        <Link
          className="sidebar-link"
          to={buildQueryString("sort", { price: -1 })}
        >
          Price high to low
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
