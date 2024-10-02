// src/Main.js
import React, { useState } from "react"; // Importando React e o hook useState
import PlayersList from "./PlayersList"; // Importando o componente que lista os jogadores
import ScheduleCarousel from "./ScheduleCarousel"; // Importando o carrossel de jogos
import { FaMoon, FaSun } from "react-icons/fa"; // Importando ícones para o tema

function Main() {
  // Estado para controlar se o modo escuro está ativado ou não
  const [darkMode, setDarkMode] = useState(false);

  // Função para alternar o modo escuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alterna o estado do modo escuro
    document.body.classList.toggle("dark-mode", !darkMode); // Adiciona ou remove a classe dark-mode no body
  };

  return (
    <main className={darkMode ? "dark-mode" : ""}>
      {" "}
      {/* Aplica a classe dark-mode se ativado */}
      <button onClick={toggleDarkMode} className="theme-toggle">
        {darkMode ? <FaSun /> : <FaMoon />}{" "}
        {/* Altera o ícone de acordo com o estado do tema */}
      </button>
      <section id="home" className="section home">
        <h2>Bem-vindo ao Golden State Warriors</h2>
        <p>
          Golden State Warriors: Uma Dinastia no Basquete O Golden State
          Warriors é uma das franquias mais icônicas e vitoriosas da NBA.
          Fundado em 1946 como Philadelphia Warriors, o time mudou-se para a
          área da Baía de São Francisco em 1962, adotando o nome Golden State
          Warriors em 1971. Desde então, a equipe tem se destacado como uma das
          forças mais dominantes do basquete mundial. Com um estilo de jogo
          marcado por velocidade, arremessos de longa distância e um trabalho de
          equipe impecável, os Warriors conquistaram seis títulos da NBA, sendo
          o mais recente em 2022. Liderados por estrelas como Stephen Curry,
          Klay Thompson e Draymond Green, além do ex-técnico Steve Kerr, o time
          redefiniu o basquete moderno com sua ênfase no jogo de perímetro e
          precisão nos arremessos de três pontos. O ápice da equipe ocorreu
          entre 2015 e 2019, período em que os Warriors chegaram às finais da
          NBA por cinco anos consecutivos, vencendo três campeonatos (2015, 2017
          e 2018). O estilo de jogo revolucionário, especialmente a habilidade
          sem precedentes de Curry nos arremessos de longa distância, inspirou
          uma nova geração de jogadores e fãs ao redor do mundo. Além de suas
          conquistas em quadra, o Golden State Warriors é também reconhecido por
          seu impacto fora dela. A franquia se envolve em diversas iniciativas
          sociais e comunitárias, com o objetivo de promover o desenvolvimento
          educacional e social na Bay Area e além. O time joga atualmente no
          moderno Chase Center, localizado em San Francisco, uma arena de ponta
          que serve como casa para uma das fanbases mais apaixonadas da NBA. O
          futuro dos Warriors é brilhante, com a equipe continuando a ser
          competitiva e a construir seu legado como uma verdadeira dinastia no
          basquete. {/* Texto descritivo sobre o time */}
        </p>
      </section>
      <section id="players" className="section players">
        <h2>Principais Jogadores</h2>
        <PlayersList /> {/* Renderiza a lista de jogadores */}
      </section>
      <section id="schedule" className="section schedule">
        <ScheduleCarousel /> {/* Renderiza o carrossel de jogos */}
      </section>
    </main>
  );
}

export default Main; // Exporta o componente Main para uso em outros lugares
