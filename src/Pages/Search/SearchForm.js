import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../services/SearchLocationAPI";

export default function SearchForm({ onSearchChange }) {
  let navigate = useNavigate();

  const [location, setLocation] = useState(null);

  const loadOptions = (input) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${input}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchInput) => {
    setLocation(searchInput);
    onSearchChange(searchInput);
  };

  return (
    <div>
      <AsyncPaginate
        placeholder="Where are you going?"
        debounceTimeout={600}
        value={location}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
      <button
        type="submit"
        className="btn btn-sm btn-primary"
        onClick={() => {
          navigate("/new");
        }}
      >
        Let's go!
      </button>
    </div>
  );
}
