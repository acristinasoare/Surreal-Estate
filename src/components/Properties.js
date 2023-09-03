import React from "react";
import PropertyCard from "./PorpertyCard";

const Properties = () => {
  return (
    <div>
      <div>Properties Page</div>
      <div>
        <PropertyCard
          title="Stunning flat for sale"
          type="Flat"
          bathrooms="2"
          bedrooms="2"
          price="150k"
          city="Edinburgh"
          email="cristina@commmandshift.com"
        />
      </div>
    </div>
  );
};

export default Properties;
