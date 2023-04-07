import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function Saved() {
  let navigate = useNavigate();
  let { tripName } = useParams();
  return (
    <div className="saved d-flex justify-content-center align-items-center">
      The list is empty! {tripName && `page for ${tripName}`}
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
