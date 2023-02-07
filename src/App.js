import "./App.css";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Navbar />
          <section></section>
        </div>
      </Routes>
    </Router>
  );
}

export default App;
