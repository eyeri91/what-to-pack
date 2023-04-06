import React from "react";

// import { useSelector } from "react-redux";

const WeatherCard = ({ props }) => {
  return (
    <div className="weather-card accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseOne"
          aria-expanded="true"
          aria-controls={"panelsStayOpen-collapseOne"}
        >
          Today
        </button>
      </h2>

      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#weatherAccordion"
      >
        <div className="accordion-body">
          <h3>
            {props.date}, {props.time}
          </h3>
          <h3>Feels like: {props.feelsLike}</h3>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
