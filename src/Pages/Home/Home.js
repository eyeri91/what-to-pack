import React from "react";
import { useNavigate } from "react-router-dom";
import TicketImg from "../../assets/ticket.svg";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home">
      <img src={TicketImg} alt="A flight ticket" />
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
