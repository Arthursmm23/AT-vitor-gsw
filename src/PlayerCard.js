// src/PlayerCard.js
import React from "react";
import "./playerCard.css";

function PlayerCard({ player }) {
  // Recebe um objeto player como prop
  return (
    <div className="player-card">
      <img src={player.image} alt={player.name} className="player-image" />
      <h3 className="player-name">{player.name}</h3>
      <p className="player-position">{player.position}</p>
      <p className="player-number">#{player.number}</p>
    </div>
  );
}

export default PlayerCard;
