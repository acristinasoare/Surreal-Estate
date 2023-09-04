import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const initialState = {
    alert: {
      message: "",
      isError: false,
    },
  };
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState(initialState.alert);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() =>
        setAlert({
          message: "Server Error. Please try again later",
          isError: true,
        })
      );
  }, []);

  return (
    <div>
      <div className="alert">
        <Alert message={alert.message} error={alert.isError} />
      </div>
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="properties">
        {properties.map((property) => (
          <div key={property._id} className="properties-item">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
