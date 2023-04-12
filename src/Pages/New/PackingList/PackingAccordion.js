import React from "react";
import { v4 as uuidv4 } from "uuid";

const categoryId = uuidv4();
const PackingCategory = ({ props }) => {
  return (
    <div className="accordion-item packing-category">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${categoryId}`}
          aria-expanded="false"
          aria-controls={categoryId}
        >
          Category
        </button>
      </h2>
      <div
        id={categoryId}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body packing-items">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackingCategory;
