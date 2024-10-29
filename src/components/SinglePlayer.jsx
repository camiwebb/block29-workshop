import React, { useState, useEffect } from "react";
import { fetchDetails } from "../API";
import { useParams } from "react-router-dom";

function SinglePlayer() {
    const [player, setPlayer] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getPlayerDetails = async () => {
            const fetchedPlayer = await fetchDetails(id);
            setPlayer(fetchedPlayer);
        };

        getPlayerDetails();
    }, [id]);

        if (!player) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <h1>{ player.name}</h1>
            <img src={player.imageUrl} alt={`${player.name}'s picture`} style={{ width: '300px', height: 'auto' }} />
            <p>Breed: {player.breed}</p>
            <p>Status: {player.status}</p>
        </div>
    );
};

export default SinglePlayer;