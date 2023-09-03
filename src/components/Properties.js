// eslint-disable-next-line import/no-duplicates
import React from "react";
// eslint-disable-next-line import/no-duplicates
import { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import PropertyCard from "./PorpertyCard";
import Alert from "./Alert";
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
