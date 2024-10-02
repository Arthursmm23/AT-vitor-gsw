// src/Navbar.js
import React, { useState } from "react"; // Importando React e useState
import "./navbar.css"; // Importando o CSS para a Navbar

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar se o menu está aberto

  // Função para alternar o estado do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre menu aberto e fechado
  };

  // Função para fechar o menu
  const closeMenu = () => {
    setIsMenuOpen(false); // Fecha o menu
  };

  return (
    <nav className="navbar">
      {" "}
      {/* Elemento de navegação principal */}
      <div className="navbar-container">
        {" "}
        {/* Contêiner para o conteúdo da Navbar */}
        <a href="#" className="navbar-logo">
          {" "}
          {/* Link para a logo do time */}
          <img
            src="https://upload.wikimedia.org/wikipedia/en/0/01/Golden_State_Warriors_logo.svg" // URL da imagem do logo
            alt="Warriors Logo" // Texto alternativo para acessibilidade
            className="logo-image" // Classe para estilização
          />
        </a>
        {/* Ícone do menu hambúrguer para telas pequenas */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}{" "}
          {/* Altera entre ícone de menu aberto e fechado */}
        </div>
        {/* Menu links */}
        <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          {" "}
          {/* Altera a classe de acordo com o estado do menu */}
          <li className="nav-item">
            <a href="#home" className="nav-links" onClick={closeMenu}>
              {" "}
              {/* Link para a seção "Início" */}
              Início
            </a>
          </li>
          <li className="nav-item">
            <a href="#players" className="nav-links" onClick={closeMenu}>
              {" "}
              {/* Link para a seção "Jogadores" */}
              Jogadores
            </a>
          </li>
          <li className="nav-item">
            <a href="#schedule" className="nav-links" onClick={closeMenu}>
              {" "}
              {/* Link para a seção "Calendário" */}
              Calendário
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar; // Exporta o componente Navbar
