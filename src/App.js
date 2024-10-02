import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import YouTube from "react-youtube";
import "./style.css";

function App() {
  // Estado para controlar a visibilidade do vídeo de introdução
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  // Função para esconder o vídeo de introdução e mostrar a barra de progresso
  const hideIntro = () => {
    setLoading(true); // Inicia a barra de progresso
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(progressInterval);
          setShowIntro(false); // Esconde o vídeo ao completar a barra
          setLoading(false);
        }
        return prevProgress + 10; // Aumenta o progresso
      });
    }, 300); // Intervalo de 300ms
  };

  // Opções para o vídeo do YouTube
  const videoOptions = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1, // Auto iniciar o vídeo
      controls: 0, // Esconder controles do vídeo
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      mute: 1, // Silenciar o vídeo
      playlist: "rXnlm-On5Xs", // Loop no vídeo
    },
  };

  return (
    <div className="App">
      {showIntro && (
        <div className="intro-video-container">
          <YouTube
            videoId="rXnlm-On5Xs"
            opts={videoOptions}
            className="background-video"
          />
          <div className="overlay">
            {loading ? (
              <div className="progress-container">
                <div
                  className="progress-bar"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            ) : (
              <button className="history-button" onClick={hideIntro}>
                Conheça a história
              </button>
            )}
          </div>
        </div>
      )}
      {!showIntro && (
        <>
          <Navbar />
          <Header />
          <Main />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
