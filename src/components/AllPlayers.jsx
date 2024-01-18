import React from "react";
import { useSelector } from "react-redux";
import { useFetchPlayersQuery } from "../API/puppyBowlApi";
import "../index.css";

export default function AllPlayers() {
  const player = useSelector((state) => state.player);
  const { data = {}, error, isLoading } = useFetchPlayersQuery();

  if (isLoading) {
    <p>Loading...</p>;
  }

  if (error) {
    <p>Error: {error.message}</p>;
  }

  return (
    <div className="all-players">
      {player.map((player) => (
        <div key={player.id} className="player-card">
          <img
            className="player-image"
            src={player.imageUrl}
            alt={player.name}
          />

          <div className="player-details">
            <h2> {player.name} </h2>

            <p> {player.breed} </p>

            <p> {player.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
