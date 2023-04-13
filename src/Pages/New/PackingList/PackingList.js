import React from "react";
import PackingAccordion from "./PackingAccordion";
const PackingList = () => {
  return (
    <div className="packing-list mt-5 mt-md-5 align-self-md-start">
      <h3 className="packing-list_heading text-center fw-light">
        What to pack
      </h3>
      {/* <DefaultList /> */}
      {/* Load the default list and make drop downs for each properties.
      Add the 'Add' button to each drop down to add more packing items.
      Add the 'Delete' button to each items to delete.
      Add the Save button to save the list. */}
      <div
        className="accordion accordion-flush"
        id="accordionPanelsStayOpenExample"
      >
        <PackingAccordion />
      </div>
    </div>
  );
};

export default PackingList;
