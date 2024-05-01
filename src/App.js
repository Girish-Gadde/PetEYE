import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signing from "./components/Signing";
import Home from "./components/Home ";
import Navbar from "./Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Signing />} />
          <Route path="/home" element={<Home />} />
          {/* Define other routes that you need*/}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
