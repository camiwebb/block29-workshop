import React, { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { useNavigate, Link } from "react-router-dom";

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const getPlayers = async () => {
            const fetchedPlayers = await fetchPlayers();
            setPlayers(fetchedPlayers);
        };

        getPlayers();
    }, []);

     const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h1>All Players</h1>
            <div className="search-container">
            <input
                type="text"
                placeholder="Search by name"
                value={search}
                onChange={(e) => setSearch(e.target.value)} // Update search term
            />
            </div>
            <div className="link-container"> <Link to="/add-player">Add New Player</Link> </div>
            <div className="player-container">
                {(search ? filteredPlayers : players).map((player) => (
                    <div key={player.id} className="player-card">
                        <h3>{player.name}</h3>
                        <img src={player.imageUrl} alt={`${player.name}'s picture`} style={{ width: '150px', height: 'auto' }} />
                        <div className="button-container">
                        <button onClick={() => navigate(`/players/${player.id}`)}>View Details</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default AllPlayers;