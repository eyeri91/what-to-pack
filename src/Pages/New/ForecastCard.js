import React from "react";

const ForecastCard = ({ props }) => {
  return (
    <div className="forecast-card accordion-item">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${props.id}`}
          aria-expanded="false"
          aria-controls={props.id}
        >
          {props.date}
        </button>
      </h2>
      <div
        id={props.id}
        className="accordion-collapse collapse"
        data-bs-parent="#weatherAccordion"
      >
        <div className="accordion-body d-flex align-items-center">
          <img src={props.icon} alt="weather-icon" className="forecast-icon" />
          <h6 className="forecast-description fw-light ms-2">
            {props.description}{" "}
          </h6>
          <h4 className="fw-light ms-auto">
            <span className="forecast-min-temp">{`L: ${props.minTemp}`} </span>
            <span className="forecast-max-temp ms-2">
              {`L: ${props.maxTemp}`}{" "}
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
