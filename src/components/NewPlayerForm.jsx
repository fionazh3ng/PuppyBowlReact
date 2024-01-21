import React from "react";
import { useAddNewPlayerMutation } from "../API/puppyBowlApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewPlayerForm() {
  const [addNewPlayer, response] = useAddNewPlayerMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    image: "",
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addNewPlayer(formData);
    navigate("/");
  };

  return (
    <div>
      <h2>Please fill out the form below: </h2>
      <form className="new-player-form row" onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            onChange={onChange}
          />
        </label>
        <br></br>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            placeholder="breed"
            required
            onChange={onChange}
          />
        </label>
        <br></br>
        <label>
          Image:
          <input
            type="text"
            name="image"
            placeholder="image URL"
            onChange={onChange}
          />
        </label>
        <br></br>
        <div>
          <div className="form-check">
            <input type="checkbox" name="field" onChange={onChange} />
            <label>Field</label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="bench" onChange={onChange} />
            <label>Bench</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
