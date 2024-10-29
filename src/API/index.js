//
const ApiURL = "https://fsa-puppy-bowl.herokuapp.com/api/{cohortName}";
const cohortName = "2407-FTB-ET-WEB-PT";

// Fetch all players
export async function fetchPlayers() {
  try {
    const response = await fetch(`${ApiURL}/players`);
    const json = await response.json();
    return json.data.players;
  } catch (error) {
    console.error(error);
  }
}

// Fetch single player details
export async function fetchDetails(playerID) {
  try {
    const response = await fetch(`${ApiURL}/players/${playerID}`);
    const json = await response.json();
    return json.data.player;
  } catch (error) {
    console.error(error);
  }
}

// Create a new player
export async function createPlayer(playerData) {
    try {
        const response = await fetch(`${ApiURL}/players`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(playerData),
        });
        const json = await response.json();
        return json.data.player;
    } catch (error) {
        console.error("Error creating player:", error);
    }
}