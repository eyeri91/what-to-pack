import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Saved from "./Pages/Saved";
import ErrorPage from "./Pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main page */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
