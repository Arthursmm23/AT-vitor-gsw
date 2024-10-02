import React from "react";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Importando ícones para as setas
import "./scheduleCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const games = [
  {
    date: "October 18, 2023",
    opponent: "Los Angeles Lakers",
    location: "Home",
    time: "7:00 PM",
    image:
      "https://artwork.espncdn.com/events/401679127/16x9/1280x720_20240628225048.jpg",
  },
  {
    date: "October 22, 2023",
    opponent: "Phoenix Suns",
    location: "Away",
    time: "6:30 PM",
    image:
      "https://artwork.espncdn.com/events/401358783/16x9/1280x720_20211206135849.jpg",
  },
  {
    date: "October 25, 2023",
    opponent: "Denver Nuggets",
    location: "Home",
    time: "8:00 PM",
    image:
      "https://www.lineups.com/wp-content/uploads/2020/08/nuggets-vs-warriors.jpg",
  },
  {
    date: "October 28, 2023",
    opponent: "Dallas Mavericks",
    location: "Away",
    time: "5:00 PM",
    image:
      "https://artwork.espncdn.com/events/401558345/16x9/1280x720_20230628142942.jpg",
  },
];

const GameCarousel = () => {
  const settings = {
    dots: true, // Mostra pontos de navegação
    infinite: true, // Permite rolagem infinita
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Número de slides a serem mostrados
    slidesToScroll: 1, // Número de slides a serem rolados por vez
    nextArrow: <SampleNextArrow />, // Componente para o botão "próximo"
    prevArrow: <SamplePrevArrow />, // Componente para o botão "anterior"
  };
  return (
    <div className="carousel-container">
      <h2>Calendário</h2>
      <Slider {...settings}>
        {games.map((game, index) => (
          <div key={index} className="game-card">
            <img src={game.image} alt={game.opponent} className="team-logo" />
            <h3>{game.date}</h3>
            <p>Adversário: {game.opponent}</p>
            <p>Local: {game.location}</p>
            <p>Horário: {game.time}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Setas personalizadas
const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next" onClick={onClick}>
      <FaAngleRight size={30} style={{ color: "#f1c40f" }} />{" "}
      {/* Altere a cor aqui */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaAngleLeft size={30} style={{ color: "#f1c40f" }} />{" "}
      {/* Altere a cor aqui */}
    </div>
  );
};

export default GameCarousel;
