import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import weather from "../../services/WeatherAPI";

export default function SearchForm() {
  let navigate = useNavigate();
  const [city, setCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          required
          placeholder="Seoul"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <button
        type="submit"
        className="btn btn-sm btn-primary"
        onClick={() => {
          navigate("/new");
          weather.fetchWeather(city);
        }}
      >
        Let's go!
      </button>
    </form>
  );
}
