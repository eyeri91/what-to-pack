import React from "react";
import basicList from "./basicList";

const PackingAccordion = () => {
  return (
    <div className="category-container">
      {basicList.map((listCategory) => {
        for (const [category, items] of Object.entries(listCategory)) {
          return (
            <div className="category">
              <button
                className="btn btn-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${category}`}
                aria-expanded="false"
                aria-controls={`${category}`}
              >
                {category}
              </button>
              <div className="collapse" id={`${category}`}>
                <ul className="list-group list-group-flush">
                  {items.map((item) => {
                    return <li className="list-group-item">{item}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PackingAccordion;
