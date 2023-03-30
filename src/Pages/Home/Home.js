import React from "react";
import { useNavigate } from "react-router-dom";
import TicketImg from "../../assets/ticket.svg";

function Home() {
  let navigate = useNavigate();
  return (
    <div className="home home-container container-fluid d-flex flex-column justify-content-center align-items-center">
      <h1 className="home_heading point-text">What To Pack?!</h1>
      <img src={TicketImg} alt="A flight ticket" className="ticket-img" />
      <button
        className="start-btn reset-btn"
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
