import React from "react";
import { SavedTripButton } from "./SavedTripButton";
import { getSavedDate } from "../../utils/utils";

function Saved() {
  const keysForSavedTrips = Object.keys(localStorage);
  const createSavedTripButtons = (keysForSavedTrips) => {
    return keysForSavedTrips.map((key) => {
      const nameOfTrip = key.substr(9);
      return (
        <SavedTripButton key={key} date={getSavedDate()} city={nameOfTrip} />
      );
    });
  };

  return (
    <div className="saved d-flex justify-content-center align-items-center">
      {keysForSavedTrips
        ? createSavedTripButtons(keysForSavedTrips)
        : "The list is empty!"}
    </div>
  );
}

export default Saved;
