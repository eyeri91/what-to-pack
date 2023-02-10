import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      <button
        className="btn btn-sm btn-primary"
        onClick={() => {
          navigate("/search");
        }}
      >
        Start
      </button>
    </div>
  );
}

export default Home;
