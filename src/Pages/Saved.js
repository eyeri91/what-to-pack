import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Saved() {
  let navigate = useNavigate();
  let { tripName } = useParams();
  return (
    <div className="saved">
      THIS IS SAVED {tripName && `page for ${tripName}`}
      {tripName && (
        <button
          onClick={() => {
            navigate(`/saved/${tripName}`);
          }}
        >
          {tripName}
        </button>
      )}
    </div>
  );
}

export default Saved;
