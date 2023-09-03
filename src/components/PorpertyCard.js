import React from "react";
import "../styles/property-card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

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
      <div className="property-card__data">{title}</div>
      <div className="property-card__data">
        {type} - {city}
      </div>

      <div className="property-card__data">
        <FontAwesomeIcon icon={faBed} />
        {bedrooms}
      </div>

      <div className="property-card__data">
        <FontAwesomeIcon icon={faBath} />
        {bathrooms}
      </div>

      <div className="property-card__data">
        <FontAwesomeIcon icon={faSterlingSign} />
        {price}
      </div>
      <div>
        <a href={`mailto:${email}`}>
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
