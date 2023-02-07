import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Saved() {
  let navigate = useNavigate();
  let { tripName } = useParams();
  return (
    <div class="saved">
      THIS IS SAVED
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
