import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "../components/AllPlayers";
import SinglePlayer from "../components/SinglePlayer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </div>
  );
}

export default App;
