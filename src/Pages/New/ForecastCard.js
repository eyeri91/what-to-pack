import React from "react";

const ForecastCard = ({ props }) => {
  return (
    <div className="forecast-card accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-${props.id}`}
          aria-expanded="false"
          aria-controls={`panelsStayOpen-${props.id}`}
        >
          {props.date}
        </button>
      </h2>
      <div
        id={`panelsStayOpen-${props.id}`}
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
          <h1>
            Min temp: {props.minTemp} / Max temp: {props.maxTemp}{" "}
          </h1>
          <p>{props.description} </p>
          <p>{props.icon} </p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;
