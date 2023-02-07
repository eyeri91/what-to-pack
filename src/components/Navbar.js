import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/">HOME </Link>
      <Link to="/search">NEW TRIP</Link>
      <Link to="/saved"> SAVED</Link>
    </nav>
  );
}

export default Navbar;
