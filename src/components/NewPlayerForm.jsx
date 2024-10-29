import React, { useState } from "react";
import { createPlayer } from "../API";

function NewPlayerForm() {
        const [name, setName] = useState("");
        const [breed, setBreed] = useState("");
        const [status, setStatus] = useState("bench");
        const [imageUrl, setImageUrl] = useState("");

const handleSubmit = async (event) => {
        event.preventDefault();
        const newPlayer = {
            name,
            breed,
            status,
            imageUrl,
        };
        const addedPlayer = await createPlayer(newPlayer);

        if (addedPlayer) {
            setName("");
            setBreed("");
            setStatus("field");
            setImageUrl("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Player</h2>
            <label>
                Name: 
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Breed: 
                <input
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    required
                />
            </label>
            <label>
                Status: 
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="field">Field</option>
                    <option value="bench">Bench</option>
                </select>
            </label>
            <label>
                Image URL: 
                <input
                    type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </label>
            <button type="submit">Add Player</button>
        </form>
    );
}

export default NewPlayerForm;