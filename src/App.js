import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/index.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import basicList from "./Pages/New/PackingList/basicList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home/Home";
import New from "./Pages/New/New";
import Saved from "./Pages/Saved";
import Search from "./Pages/Search/Search";
import ErrorPage from "./Pages/Error";

function App() {
  const [list, setList] = useState(basicList);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main page */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New list={list} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/saved/" element={<Saved list={list} />} />
        <Route path="/saved/:tripName" element={<Saved />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
