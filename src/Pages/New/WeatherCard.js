import React from "react";

// import { useSelector } from "react-redux";

const WeatherCard = ({ props }) => {
  return (
    <div className="weather-card accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button"
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
        class="accordion-collapse collapse show"
        data-bs-parent="#weatherAccordion"
      >
        <div class="accordion-body">
          <h3>
            {props.date}, {props.time}
          </h3>
          <h3>Current Temperature: {props.currentTemp}</h3>
          <h3>Feels like: {props.feelsLike}</h3>
          <p>
            Description: {props.description}, Icon: {props.icon}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
