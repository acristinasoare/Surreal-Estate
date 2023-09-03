import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../../components/PorpertyCard";

describe("PropertyCard", () => {
  const validProps = {
    title: "Stub title",
    type: "Stub type",
    bathrooms: "1",
    bedrooms: "2",
    price: "150000",
    city: "Stub city",
    email: "stub@test.com",
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(
      <PropertyCard
        title={validProps.title}
        type={validProps.type}
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        price={validProps.price}
        city={validProps.city}
        email={validProps.email}
      />
    );

    expect(getByText("Stub title")).toBeInTheDocument();
    expect(getByText(/Stub type/i)).toBeInTheDocument();
    expect(getByText(/Stub city/i)).toBeInTheDocument();
    expect(getByText("1")).toBeInTheDocument();
    expect(getByText("2")).toBeInTheDocument();
    expect(getByText("150000")).toBeInTheDocument();
    expect(getByText("Email")).toBeInTheDocument();
  });
});
