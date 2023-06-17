import React from "react";
import { SavedTripButton } from "./SavedTripsButtonsAndModal/SavedTripButton";

function Saved() {
  const keysForSavedTrips = Object.keys(localStorage);
  const createSavedTripButtons = (keysForSavedTrips) => {
    return keysForSavedTrips.map((key) => {
      const nameOfTrip = key.substr(9);
      const keyForTrp = key;
      const foundTripObject = JSON.parse(localStorage.getItem(keyForTrp));

      const dateOfFoundTrip = foundTripObject[0].date;
      return (
        <SavedTripButton
          tripKey={keyForTrp}
          date={dateOfFoundTrip}
          city={nameOfTrip}
          foundTripObject={foundTripObject}
        />
      );
    });
  };

  return (
    <div className="container saved-container col-md-6">
      <div className="saved d-flex flex-row-reverse justify-content-center align-items-center flex-wrap">
        {keysForSavedTrips
          ? createSavedTripButtons(keysForSavedTrips)
          : "The list is empty!"}
      </div>
    </div>
  );
}

export default Saved;
