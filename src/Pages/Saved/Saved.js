import React from "react";
import { SavedTripButton } from "./SavedTripButton";
import { getSavedDate } from "../../utils/utils";

function Saved() {
  const keysForSavedTrips = Object.keys(localStorage);
  const createSavedTripButtons = (keysForSavedTrips) => {
    return keysForSavedTrips.map((key) => {
      const nameOfTrip = key.substr(9);
      const keyForTrp = key;
      return (
        <SavedTripButton
          tripKey={keyForTrp}
          date={getSavedDate()}
          city={nameOfTrip}
        />
      );
    });
  };

  return (
    <div className="container saved-container col-md-6">
      <div className="saved d-flex justify-content-center align-items-center flex-wrap">
        {keysForSavedTrips
          ? createSavedTripButtons(keysForSavedTrips)
          : "The list is empty!"}
      </div>
    </div>
  );
}

export default Saved;
