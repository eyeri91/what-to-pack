import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/index.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import New from "./Pages/New/New";
import Saved from "./Pages/Saved/Saved";
import Search from "./Pages/Search/Search";
import ErrorPage from "./Pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main page */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved/" element={<Saved />} />
        <Route path="/saved/:tripName" element={<Saved />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
