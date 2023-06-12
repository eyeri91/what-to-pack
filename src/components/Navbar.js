import React from "react";
import "../assets/index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-light mb-5 sticky-top">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"></a> */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ">
            <Link to="/" className="nav-link point-text">
              HOME
            </Link>
            <Link to="/search" className="nav-link">
              NEW TRIP
            </Link>
            <Link to="/saved" className="nav-link">
              SAVED
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
