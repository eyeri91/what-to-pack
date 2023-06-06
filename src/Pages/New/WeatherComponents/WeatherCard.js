import React from "react";
import Title from "../Title";

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
          {props.isItToday ? "Today" : props.date}
        </button>
      </h2>

      <div
        id="panelsStayOpen-collapseOne"
        className="accordion-collapse collapse show"
        data-bs-parent="#weatherAccordion"
      >
        <div className="accordion-body">
          <span className="weather-date fw-lighter me-2">{props.date}</span>
          <span className="weather-time fw-lighter">{props.time}</span>
          <Title props={props} />
          <p className="weather-feelslike fw-lighter text-end mt-3 mb-0">
            feels like: {props.feelsLike}°
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
