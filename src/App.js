import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Saved from "./Pages/Saved";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main page */}
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
