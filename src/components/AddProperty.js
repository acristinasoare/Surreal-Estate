import React, { useState } from "react";
import "../styles/add-property.css";
import axios from "axios";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Edinburgh",
      type: "flat",
      bedrooms: 1,
      bathrooms: 1,
      price: 0,
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };

  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    axios
      .post("http://localhost:4000/api/v1/PropertyListing", fields)
      .then(() =>
        setAlert({
          message: "Property added.",
          isSuccess: true,
        })
      )
      .catch(() =>
        setAlert({
          message: "Server Error. Please try again later",
          isSuccess: false,
        })
      );
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="add-property">
      <form onSubmit={handleAddProperty} className="add-property__form">
        <div className="alert">
          <Alert message={alert.message} success={alert.isSuccess} />
        </div>
        <div className="add-property__form-item">
          <label htmlFor="title">
            Title
            <input
              type="text"
              placeholder="Flat for sale"
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="city">
            City
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Edinburgh">Edinburgh</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Manchester">Manchester</option>
            </select>
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="type">
            Type
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="bedrooms">
            Bedrooms
            <input
              type="number"
              min="0"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="bathrooms">
            Bathrooms
            <input
              type="number"
              min="0"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="price">
            Price
            <input
              type="number"
              min="0"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="add-property__form-item">
          <label htmlFor="email">
            Contact Email
            <input
              type="email"
              placeholder="Enter your email address"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button
          type="submit"
          id="submitBtn"
          className="add-property__form-button"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
