import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div class="home">
      THIS IS THE HOME
      <button
        onClick={() => {
          navigate("/search");
        }}
      >
        Where are you going?
      </button>
    </div>
  );
}

export default Home;
