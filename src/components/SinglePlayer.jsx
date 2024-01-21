import React from "react";
import { useParams } from "react-router-dom";
import { useFetchPlayerQuery } from "../API/puppyBowlApi";
import { useDeletePlayerMutation } from "../API/puppyBowlApi";
import { useNavigate } from "react-router-dom";
import { removePlayer } from "./playerSlice";

import { useDispatch } from "react-redux";

export default function SinglePlayer() {
  const { id } = useParams();
  const { data, isLoading } = useFetchPlayerQuery(id);
  const playerDetail = data?.data?.player;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [deletePlayer, response] = useDeletePlayerMutation();

  const onDelete = (e) => {
    e.preventDefault();

    dispatch(removePlayer({ id: id }));
    deletePlayer(id);
    navigate("/");
  };

  return (
    <div className="single-player">
      <img className="player-image" src={playerDetail?.imageUrl} />
      <h1>Name: {playerDetail?.name}</h1>
      <h3>Breed: {playerDetail?.breed}</h3>
      <h3>Status: {playerDetail?.status}</h3>
      <h3>Team Id: {playerDetail?.teamId}</h3>
      <p>Created At: {playerDetail?.createdAt}</p>
      <p>Updated At: {playerDetail?.updatedAt}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
