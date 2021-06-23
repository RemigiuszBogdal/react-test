import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [properties, setProperties] = useState([]);

  const getProperties = useCallback(async () => {
    const response = await axios
      .get(`https://60d1e41c5b017400178f4a5d.mockapi.io/api/booking/properties`)
      .catch((error) => {
        console.error(error);
      });

    if (response?.data) {
      setProperties(response.data);
    }
  }, []);

  useEffect(() => {
    getProperties();
  }, [getProperties]);

  return (
    <div>
      <ul>
        {properties.map(({ id, name, pricePerNight }) => (
          <li key={id}>
            <a href={`/property/${id}`}>
              {name} - {pricePerNight}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
