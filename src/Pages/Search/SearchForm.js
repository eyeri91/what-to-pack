import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import weather from "../../services/WeatherAPI";

export default function SearchForm() {
  let navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          placeholder="Seoul"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="btn btn-sm btn-primary"
        onClick={() => {
          navigate("/new");
          weather.fetchWeather(location);
        }}
      >
        Let's go!
      </button>
    </form>
  );
}
