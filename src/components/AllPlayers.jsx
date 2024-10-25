import React, { useState, useEffect } from "react";
import { fetchPlayers } from "../API";
import { useNavigate } from "react-router-dom";

function AllPlayers() {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPlayers = async () => {
            const fetchedPlayers = await fetchPlayers();
            setPlayers(fetchedPlayers);
        };

        getPlayers();
    }, []);

    return (
        <div>
            <h1>All Players</h1>
            {
                players.map((player) => {
                    return (
                      <div key={player.id}>
                        <h4> {player.name} </h4>
                        <button onClick={() => navigate(`/players/${player.id}`)}> View Details </button>
                      </div>
                    );
                })
            }
        </div>
    );
};

export default AllPlayers;