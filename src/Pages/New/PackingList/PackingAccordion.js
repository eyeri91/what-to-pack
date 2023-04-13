import React from "react";
import basicList from "./basicList";
import { v4 as uuidv4 } from "uuid";

const PackingAccordion = () => {
  return (
    <div className="category-container" key={`${basicList}`}>
      {basicList.map((listCategory) => {
        for (const [category, items] of Object.entries(listCategory)) {
          return (
            <div className="packing-container d-flex" key={category}>
              <button
                className="reset-btn category-btn mb-2 packing-category"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${category}`}
                aria-expanded="false"
                aria-controls={`${category}`}
              >
                {category}
              </button>
              <div className="collapse" id={`${category}`}>
                <ul className="list-group list-group-flush packing-list">
                  {items.map((item) => {
                    return (
                      <li
                        className="list-group-item packing-item ms-2"
                        key={uuidv4()}
                      >
                        {item}
                      </li>
                    );
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
