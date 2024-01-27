import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFetchPlayersQuery } from "../API/puppyBowlApi";
import { Link } from "react-router-dom";
import "../index.css";

export default function AllPlayers() {
  const { data, error, isLoading } = useFetchPlayersQuery();
  const players = useSelector((state) => state.players);

  if (isLoading) {
    <p>Loading...</p>;
  }

  if (error) {
    <p>Error: {error.message}</p>;
  }

  const onChange = (e) => {
    e.target.value;
  };

  return (
    <div>
      <div className="all-players">
        {players.map((player) => (
          <div key={player.id} className="player-card">
            <img
              className="player-image"
              src={player.imageUrl}
              alt={player.name}
            />
            <Link to={`/players/${player.id}`}>See Detail</Link>

            <div className="player-details">
              <h2> {player.name} </h2>

              <p> {player.breed} </p>

              <p> {player.status} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
