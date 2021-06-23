import React from "react";

const PropertyDetails = ({
  name,
  thumbnail,
  description,
  pricePerNight,
  address,
  country,
}) => (
  <div>
    <h1>{name}</h1>
    <img src={thumbnail} alt={name} />
    <p>Price per night: {pricePerNight}</p>
    <p>
      {address}, {country}
    </p>
    <p>{description}</p>
  </div>
);

export default PropertyDetails;
