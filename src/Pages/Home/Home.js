import React from "react";
import { useNavigate } from "react-router-dom";
import earth from "../../assets/earth-big.jpg";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      <img
        src={earth}
        alt="Earth"
        className="img-fluid
      "
      />
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
