// src/PlayersList.js
import React from "react";
import PlayerCard from "./PlayerCard";
import "./playersList.css";

// Array de jogadores (exemplo)
const playersData = [
  {
    name: "Stephen Curry",
    position: "PG",
    number: 30,
    image:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254",
  },
  {
    name: "Brandin Podziemski",
    position: "PG",
    number: 2,
    image:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4709138.png&w=350&h=254",
  },
  {
    name: "Draymond Green",
    position: "PF",
    number: 23,
    image:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png",
  },
  {
    name: "Andrew Wiggins",
    position: "SF",
    number: 22,
    image:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3059319.png",
  },
  {
    name: "Jonathan Kuminga",
    position: "PF",
    number: 0,
    image:
      "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4433247.png&w=350&h=254",
  },
  // Adicione mais jogadores conforme necessário
];

function PlayersList() {
  // Componente para renderizar a lista de jogadores
  return (
    <div className="players-list">
      {playersData.map((player, index) => (
        <PlayerCard key={index} player={player} />
      ))}
    </div>
  );
}

export default PlayersList;
