import React from "react";
import { Routes, Route } from "react-router-dom";
import AllPlayers from "../components/AllPlayers";
import SinglePlayer from "../components/SinglePlayer";
import NewPlayerForm from "../components/NewPlayerForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/players/playerform" element={<NewPlayerForm />} />
      </Routes>
    </div>
  );
}

export default App;
