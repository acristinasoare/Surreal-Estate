import React from "react";
import "../styles/property-card.css";
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";

const PropertyCard = ({
  title,
  type,
  bathrooms,
  bedrooms,
  price,
  city,
  email,
}) => {
  return (
    <div className="property-card__container">
      <img
        className="property-card__logo"
        src={logo}
        alt="surreal-estate-logo"
      />
      <div className="property-card__title">{title}</div>
      <div className="property-card__location">
        {type} - {city}
      </div>

      <div className="property-card__data">
        <FontAwesomeIcon className="property-card__icon" icon={faBed} />
        {bedrooms}
      </div>

      <div className="property-card__data">
        <FontAwesomeIcon className="property-card__icon" icon={faBath} />
        {bathrooms}
      </div>

      <div className="property-card__data">
        <FontAwesomeIcon
          className="property-card__icon"
          icon={faSterlingSign}
        />
        {price}
      </div>
      <div className="property-card__email-link">
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon className="property-card__icon" icon={faEnvelope} />
          Email
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
